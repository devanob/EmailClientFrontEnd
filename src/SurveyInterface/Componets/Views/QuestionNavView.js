import React from "react";
import { observer } from 'mobx-react';
import CustomButton from "../ElementComponet/CustomButton";


//Component
function QuestionNavView(props) {
    const store = props.store;
    const nextCallBack = store.goNext;
    const prevCallback = store.goPrevious;
    return (

        <div className='navigational-wrapper'>
            {store.hasPrevious ? <CustomButton onClick={prevCallback} >Previous</CustomButton > : ""}
            {store.hasNext ? <CustomButton onClick={nextCallBack } to={store.getLink} >Next</CustomButton> : ""}
        </div>
    );
  
}
export default observer(QuestionNavView);
