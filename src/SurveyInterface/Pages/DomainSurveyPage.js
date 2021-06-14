import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../Assets/sass/Landing.scss"
import { useStores } from '../hooks/use-stores';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import ProgressBar from "../Componets/Views/ProgressBar";
import SurveyView from "../Componets/Views/SurveyView";
// import { _allowStateChangesInsideComputed } from "mobx";


const DomainSurveyPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  domainStore.getNextDomain();
  //let slug= props.match.params.slug;
  return (
        <GenericPageContainer>
            <ProgressBar></ProgressBar>
            <SurveyView store={pageStore} />
        </GenericPageContainer>
  )
})
//
export default  DomainSurveyPage;
