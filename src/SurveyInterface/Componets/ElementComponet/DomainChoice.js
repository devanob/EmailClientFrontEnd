import React from "react";
import { observer } from 'mobx-react';
import "external-svg-loader";
//Component
function DomainInstance(props) {
    const index = props.index;
    const model = props.model;
    const domain_icon = require(`../../Assets/image/svg/${model.image_id}`);
    return (

        <div className='domain-instace-container' onClick={model.toggleSection}>
            <div className='selection-box'>
                {model.getIsSelected ? "Selected" : "Not Selected"}
            </div>
             <div className='image-container'>
             <svg data-src={domain_icon} fill="currentColor" width="50px" height="50px"
                style={{color: "red"}}/>
             </div>
              <div className='info'>
                    <div className='header'>
                        {model.label}
                    </div>
                    <div className='description'>
                        {model.description }
                    </div>
              </div>
        </div>
    );
  
}
export default observer(DomainInstance);
