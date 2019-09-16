
import { observable, computed, action, decorate, configure} from "mobx";
import EmailModel from '../Models/EmailModel';
import sampleDataInbox from '../../SampleData /SampleData';

configure({ enforceActions: 'observed' })
//IMPORTS
//Model The Users Contacts And Potential Contacts
export default class InboxStore {
    /**
     *
     * @param {*} storeOwner-Store Owner-Owned By This Store Instance
     */
    inboxEmails = []
    transporLayer = null;
    constructor(store=null,transporLayer=null){
        this.store = store;
        this.transporLayer = transporLayer;
        this.store.setChildStore(this,"inboxStore");
        this.loadData();
    }
    //Load contacts active and pending from the server using the transport layer
    loadData(){
        this.setInboxedEmails(sampleDataInbox) 
        
    }
    async asyncLoadData(){
    
    }
    setInboxedEmails(listJsonEmails){
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
        let newEmailList = [...this.inboxEmails, ...fileredDuplicatedModel];
        this.inboxEmails = newEmailList;
    }
    get getInboxEmails(){
        if (this.inboxEmails.length < 1 ){
            return false;
        }
        else {
            return this.inboxEmails;
        }
    }
    deleteSelected(){
        let inboxEmailsDeleted= this.inboxEmails.filter(email=>{
            return !email.getSelectedState;
        });
        this.inboxEmails = inboxEmailsDeleted;
    }
}

decorate(InboxStore, {
    inboxEmails: observable,
    setInboxedEmails: action,
    getInboxEmails: computed,
    deleteSelected: action,
})