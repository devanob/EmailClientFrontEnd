import React from "react";
import { observer } from 'mobx-react';
import QuestionNavView from "./QuestionNavView";
import QuestionsView from "./QuestionsView";
import SurveyInfoView from "./SurveyInfoView";
function SurveyView(props) {
    const store = props.store;
    const currentPage = store.getCurrentPage;
    return (
        <>
            {currentPage && currentPage.info.length  ? <SurveyInfoView page={currentPage}/> :
             <QuestionsView page={currentPage}/>}
            <QuestionNavView store={store}/>
        </>
    );
  
}
export default observer(SurveyView);