import { computed,action, observable, makeObservable, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' })


class DomainModel{
    
    id= null;
    store = null;
    slug = "";
    label = "";
    domainStore = null;
    image_id = null;
    description = "";
    color = null;
    viewable = true;
    isSelected = false;
    isComplete = false;
    //
    constructor(storeOwner, modal_json={}) {
        this.store = storeOwner;
        let params_needed = ["id","slug", "label",,"image_id","color",'description','viewable'];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        makeObservable(this, {
            viewable  : observable,
            isSelected : observable,
            isComplete : observable,
            getIsSelected : computed,
            getisComplete : computed,
            toggleSection :action,
            setComplete : action,
            setInComplete : action
            
        })
    } 
    get getIsSelected(){
        return this.isSelected;
    }
    get getisComplete(){
        return this.isComplete;
    }

    toggleSection =()=>{
        this.isSelected = !this.isSelected;
    }

    setComplete = ()=>{
        this.isComplete = true;
    }
    setInComplete =()=>{
        this.isComplete = false;
    }
    
} 


export default  DomainModel;
