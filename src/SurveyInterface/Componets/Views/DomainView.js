import React from "react";
import { observer } from 'mobx-react';
import DomainChoice from "../ElementComponet/DomainChoice";

//Component
function DomainView(props) {
    const store = props.store;
    const domains = store.getViewableDomains ;
    return (
        <div className="domain-view">
                {domains.map(domain=>{
                    return (<DomainChoice model={domain} />);
                })}
        </div>
    );
  
}
export default observer(DomainView);
