import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../Assets/sass/Landing.scss"
import { useStores } from '../hooks/use-stores';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import SurveyView from "../Componets/Views/SurveyView";
import ProgressBar from "../Componets/Views/ProgressBar";
// import { _allowStateChangesInsideComputed } from "mobx";


const PreInterviewPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  domainStore.setDomainType("pre-interview");
  //let slug= props.match.params.slug;
  return (
        <GenericPageContainer>
            <ProgressBar></ProgressBar>
            <SurveyView store={pageStore} />
        </GenericPageContainer>
  )
})
//
export default  PreInterviewPage;
