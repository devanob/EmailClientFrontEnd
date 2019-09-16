
import {configure} from "mobx";
import  MessengerService  from "../Sevices/MessengerService"
import UIEmailStore from "./UIEmailStore";
import InboxStore from './InboxStore';
import OutBoxStore from './OutBoxStore';
configure({ enforceActions: 'observed' })
/**
 * Root Store 
 */
export default class RootStore {
    transportLayer = null;
    userStore = null;
    uiEmailStore = null;
    childStores= {};
    constructor(store=null, userNamePassword=null){
        this.transportLayer = new MessengerService();
        this.uiEmailStore = new UIEmailStore(this);
        this.inboxStore = new InboxStore(this,this.transportLayer);
        this.outBoxStore = new OutBoxStore(this,this.transportLayer);
        // this.uiEmailStore = new UIEmailStore(this);
        
    }
    //get the store with name -name
    getChildStoreInstance(name){
        return this.childStores[name];
    }
    setChildStore(storeInstance, name){
        this.childStores[name] =storeInstance;
    }
    //Start Async Services That are need as soon a 
    async startAsyncServices(){
        
    }
}