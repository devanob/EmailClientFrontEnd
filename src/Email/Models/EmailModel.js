import { observable, computed, action, decorate, configure} from "mobx";
configure({ enforceActions: 'observed' })
class EmailModel {
    /**
     *
     * @param {*} storeOwner-Store Owner-Owned By This Store Instance
     */
    id= null;
    fromEmail = "";
    toEmail=""
    subject=""
    date= new Date();
    message="";
    toBeArchived=false;
    setToDelete=false;
    selected=false;
    constructor(storeOwner, messageJsonInfo) {
        this.store = storeOwner;
        this.id = messageJsonInfo.id;
        this.message =messageJsonInfo.message;
        this.date= messageJsonInfo.date;
        this.subject = messageJsonInfo.subject;
        this.toEmail = messageJsonInfo.toEmail;
        this.fromEmail = messageJsonInfo.fromEmail;
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric", second:"numeric" };
        // this.date = this.date.toLocaleString("en-US",options)
    }
    toggleSelected(){
        this.selected= !this.selected;
    }
    get getSelectedState(){
        return this.selected;
    }
    
    
}

decorate(EmailModel, {
    selected: observable,
    getSelectedState: computed,
    toggleSelected: action,}
)


export default  EmailModel;
