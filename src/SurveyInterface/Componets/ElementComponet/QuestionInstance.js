import React from "react";
import { observer } from 'mobx-react';
import ChoiceInstance from "../ElementComponet/ChoiceInstance";

//Component
function QuestionInstance(props) {
    const index = props.index;
    const model = props.model;
    const choices = model.choices;
    return (

        <div className='question-instace-container'>
              <div className='index'>
                    {index + 1}
              </div>
              <div className='main-question-contanier'>
                        <div className='question-label-container'>
                              {model.label}  
                        </div>
                        <div className='choices-container'>
                            {choices.map((model,index)=>{
                                return <ChoiceInstance key={`choice-id-${index}`} model={model} index={index} />
                            })}
                        </div>
              </div>
        </div>
    );
  
}
export default observer(QuestionInstance);
