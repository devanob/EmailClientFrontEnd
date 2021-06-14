import { makeAutoObservable, observable,computed, action} from "mobx";
import { useHistory } from "react-router-dom";

export default class UiStore {
    language = "en_US"
    pendingRequestCount = 0

    // .struct makes sure observer won't be signaled unless the
    // dimensions object changed in a deepEqual manner.
    windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,

    }
    //
    constructor() {
        makeAutoObservable(this, { 
            windowDimensions: observable.struct,
            getCompletedDomain : computed,
            getInProgressDomain : computed,
            getPercentageDomain : computed,
        })
        window.onresize = () => {
            this.windowDimensions =  UiStore.getWindowDimensions();
        }
    }
    //
    static getWindowDimensions(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
          }
    }
    //
    get appIsInSync() {
        return this.pendingRequestCount === 0
    }
    //
    goToPage=(slug="")=>{
        const history = useHistory();
        history.push(slug);
    }

    get getCompletedDomain(){

    }

    get getInProgressDomain(){

    }

    get getPercentageDomain(){

    }
}