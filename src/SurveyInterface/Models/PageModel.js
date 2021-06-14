import { observable, computed, action, decorate, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' })

/**
 * Page Model
 */

// logic :{
//     next_page : null,slug: null,
//     conditionals :{
//         "2.1.1" : "AGEAAA",
//         "2.1.2" : "AGEAAB",
//         "2.1.3" : "AGEAAC",

//     }
// }
class PageModel{
    
    id= null;
    store = null;
    slug = "";
    label = "";
    questions= [];
    image_id = 12;
    logic = {};
    info = "";
    constructor(storeOwner, modal_json, questions_objs=[]) {
        //Modal must have a parent
        this.store = storeOwner;
        let params_needed = ["id","slug", "label",,"image_id", "logic","isRoot", 'info'];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        this.setQuestionsObjects(questions_objs,modal_json['question_ids']);
    } 
    setQuestionsObjects =(question_objs, question_ids)=>{

        let question_objects = question_objs.filter(question=>{
            return question_ids.includes(question.id);
        });
        this.questions = question_objects;
    }
    clearQuestion =()=>{
        this.questions.forEach(question=>{
            question.clearAnswers();
        })
    }
    getNextPage(choicesStore= null){
       if (this.logic){
         if ("next_page" in this.logic && Boolean(this.logic["next_page"])){
             return {id: this.logic['next_page'] };
         }
         else if("slug" in this.logic && Boolean(this.logic["slug"])){
            
            return {slug: this.logic['slug'] };
        }
        else if("conditionals" in this.logic && Boolean(this.logic["conditionals"])
        ){
            
            if (choicesStore){
                let keys = Object.keys(this.logic['conditionals']);
                let choices = choicesStore.getChoices(keys);
                let selectedChoice = choicesStore.getSelectedChoices(choices);
                let selectedChoice_id =  selectedChoice.length ? selectedChoice[0].id : null;
                let nextPageId = this.logic['conditionals'][selectedChoice_id];
                return {id: nextPageId };
                
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
       }
    }


} 


export default  PageModel;
