import React  from "react";
import {observer} from 'mobx-react';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import DomainView from "../Componets/Views/DomainView";
import { useStores } from '../hooks/use-stores'
import DomainNavView from "../Componets/Views/DomainNavView"

const DomainPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  return (
      <GenericPageContainer>
             <DomainView store={domainStore}/>
             <DomainNavView store={domainStore}/>
      </GenericPageContainer>
  );
})
//
export default  DomainPage;
