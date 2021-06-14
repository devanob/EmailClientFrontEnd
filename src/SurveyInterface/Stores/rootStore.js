import { makeObservable, observable, action } from "mobx";
import UiStore from "./UiStore";
import QuestionsStore from "./QuestionsStore";
import PageStore from "./PageStore";
import ChoiceStore from "./ChoicesStore";
import questionJsonsPreInterview    from "../Data/PreInterView/Questions";
import questionJsonsPhysicalHealth   from "../Data/PhysicalHealthDomain/Questions";
import pageJsonPre   from "../Data/PreInterView/Pages";
import pageJsonPhysicalHealth   from "../Data/PhysicalHealthDomain/Pages";
import DomainStore from "./DomainStore";

/**
 * Root Store -Houses All Stores
 */
export default class RootStore {
    constructor(store=null){
        
        this.uiStore = new UiStore(this);
        this.questionStore = new QuestionsStore(this,[...questionJsonsPreInterview,...questionJsonsPhysicalHealth] );
        this.choiceStore = new ChoiceStore(this);
        this.pageStore = new PageStore(this,[...pageJsonPre,...pageJsonPhysicalHealth],this.questionStore,this.choiceStore);
        this.domainStore = new DomainStore(this,this.pageStore);
        
    
    }
    
}