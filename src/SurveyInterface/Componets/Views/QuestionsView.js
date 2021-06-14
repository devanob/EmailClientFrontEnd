import React from "react";
import { observer } from 'mobx-react';
import QuestionInstance from "../ElementComponet/QuestionInstance";


//Component
function QuestionsView(props) {
    const page = props.page;
    return (
        <div className='question-view'>
                {page ? page.questions.map((question,index)=>{
                        return <QuestionInstance key={`question-id-${index+1}`} model={question} index={index} />
                    }) : "No Selected Page"
                }
                    
            </div>
    );

  
}
export default observer(QuestionsView);
