import { observable, computed, action, configure, decorate} from "mobx";

configure({ enforceActions: 'observed' })
//IMPORTS
//Model The Users Contacts And Potential Contacts

/**
 * This Class Acts As A Store For SideBar UI state 
 */

//UI Store Storeses Various States Of THe UI From Side Bar To Main Content
class UIEmailStore {
    
    activeElement= "ACTIVECONTACTS";
    isActive = true;
    store = null
    viableStates =
    [
        {"INBOX": 1 ,
            
                "uiName":"INBOX","stateName": "INBOX", "link":"#inbox"
            
        },
        {"OUTBOX": 2,
            
                "uiName":"OUTBOX","stateName": "OUTBOX","link":"#outbox"
            
        },
        {"ARCHIVE": 3,
            
                "uiName":"ARCHIVE","stateName": "ARCHIVE", "link":"#archive"
            
        },
        {"COMPOSEEMAIL": 3,
            
        "uiName":"COMPOSE","stateName": "COMPOSEEMAIL","link":"#compose-email"
    },
    
    ]
    navBrand = "WeUsThen Email App"
    searchString = "";

    /**
     * 
     * @param {*} store -The Root Store Of The UI-also allow in to be injects need dependecies into the store
     */
    constructor(store=null){
     
        
        //register the store with the parent store
        this.store = store;
        //make the active intial state the inbox
        this.activeElement= this.viableStates[0].stateName;
        //register self with parent store
        this.store.setChildStore(this,"uiMessageStore");
        
        
    }
    get getActiveElement(){
        return this.activeElement;
    }

    get getSearchString(){
        return this.searchString;
    }

    setSearchString(string){
        this.searchString = string;
    }

    get getIsActive(){
        return this.isActive;
    }
    get getNavBrand(){
        return this.navBrand;
    }

    toggleSideBarActive(){
        this.isActive = !this.isActive;
    }
    get getViableState(){
        return this.viableStates;
    }
    setActiveElement(state){
        //DEBUG
        console.log(state);
        if (state != null ){
            if (state === this.activeElement){
                this.searchString = "";
            }
            this.viableStates.forEach(element => {
                if (state in element){
                    if (state !== this.activeElement){
                        this.searchString = "";
                    }
                    this.activeElement = state;
                    

                }
            })
        }
        else{
            console.log("Null Given For State: Error");
        }
        
    }

    
}

decorate(UIEmailStore, {
    activeElement: observable, 
    isActive: observable, 
    getActiveElement: computed,
    getIsActive : computed,
    toggleSideBarActive: action,
    setActiveElement: action,
    searchString : observable,
    getSearchString :computed,
    setSearchString:action,


    }
)


export default  UIEmailStore ;