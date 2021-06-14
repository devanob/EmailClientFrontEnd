import { makeObservable,observable, computed, action, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' });

class ChoiceModel{
    
    id = null;
    owner = null;
    selected = false;
    constructor(storeOwner, modal_json) {
        //mobx
        makeObservable(this, {
            selected:observable,
            getSelectionStatus : computed,
            setStatus : action,
            toggleSection : action,
            isSelected : computed

        });
        //Modal must have a parent
        this.owner = storeOwner;
        let params_needed = ["id","label"];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        })

        
    }
    get isSelected(){
        return this.selected;
    }
    toggleSection =()=>{
        this.selected  = !this.selected;
        if (this.selected){
            this.signalParent();
        }
    }
    get getSelectionStatus  (){

        return this.selected;
    }  
  
    setStatus =(flag)=>{
        this.selected = flag;
    }

    signalParent =()=>{
        if (typeof this.owner["newSelected"] == "function") {
            this.owner.newSelected(this);
        }
    }
}



export default  ChoiceModel;
