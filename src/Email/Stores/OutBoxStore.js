
import { observable, computed, action, decorate, configure} from "mobx";
import EmailModel from '../Models/EmailModel';
import sampleDataOutbox from '../../SampleData /SampleOutBoxData';

configure({ enforceActions: 'observed' })
//IMPORTS
//Model The Users Contacts And Potential Contacts
export default class OutBoxStore {
    /**
     *
     * @param {*} storeOwner-Store Owner-Owned By This Store Instance
     */
    outBoxEmails = []
    transporLayer = null;
    constructor(store=null,transporLayer=null){
        this.store = store;
        this.transporLayer = transporLayer;
        this.store.setChildStore(this,"outboxStore");
        this.loadData();
    }
    //Load contacts active and pending from the server using the transport layer
    loadData(){
        this.setOutboxedEmails(sampleDataOutbox); 
        
    }
    async asyncLoadData(){
    
    }
    setOutboxedEmails(listJsonEmails){
        let fileredDuplicated = listJsonEmails.filter(massage=>{
            let foundMessage = listJsonEmails.find(mssgToFind=>{
                return mssgToFind.id === massage.id;
            })
            if (typeof foundMessage  === "undefined" || foundMessage  == null){
                return false;
            }
            else {
                return true;
            }
        });
        let fileredDuplicatedModel = fileredDuplicated.map(email=>{
            return new EmailModel(this,email);
        })
        //Merge the two emails
        let newEmailList = [...this.outBoxEmails, ...fileredDuplicatedModel];
        this.outBoxEmails= newEmailList;
    }
    get getOutboxEmails(){
        if (this.outBoxEmails.length < 1 ){
            return false;
        }
        else {
            return this.outBoxEmails;
        }
    }
    deleteSelected(){
        let outboxEmailsDeleted= this.outBoxEmails.filter(email=>{
            if (email.getSelectedState){
                console.log(email.getSelectedState);
            }
            return !email.getSelectedState;
        });
        this.outBoxEmails = outboxEmailsDeleted;
    }
}

decorate(OutBoxStore, {
    outBoxEmails: observable,
    setOutboxedEmails: action,
    getOutboxEmails: computed,
    deleteSelected: action,
});