import React from "react";
import { observer } from 'mobx-react';
import CustomButton from "../ElementComponet/CustomButton";
import getUrlFromRoute from "../../Route/getUrlFromRoute";
import  MAIN_ROUTES from "../../Route/MAIN_ROUTES";


//Component
function DomainNavView(props) {
    const store = props.store;
    let pre_interview = getUrlFromRoute(MAIN_ROUTES,'pre-interview');
    let domain_survey = getUrlFromRoute(MAIN_ROUTES,'domain-survey-page');
    return (

        <div className='navigational-wrapper'>
            <CustomButton to={pre_interview}>Previous</CustomButton >
            {store.getInCompleted.length ? <CustomButton to={domain_survey} >Next</CustomButton> : ""}
        </div>
    );
  
}
export default observer(DomainNavView);
