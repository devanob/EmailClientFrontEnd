import React from "react";
import { observer } from 'mobx-react';

//Component
function ChoiceInstance(props) {
    const index = props.index;
    const model = props.model;
    return (

        <div className='choice-instance'>
                <input  onChange={model.toggleSection} 
                        key={model.id} id={model.id} 
                        type="checkbox" 
                        checked={model.selected ? 'checked' : ''}
                          />
                <div className='question-label'>
                              {model.label}  
                </div>
        </div>
    );
  
}

export default observer(ChoiceInstance);
