import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { observer, inject} from "mobx-react"
import NavBar  from "./Email/Componets/NavBar"
import InboxView from './Email/Componets/InboxView';
import OutboxView from './Email/Componets/OutboxView';
//Entry Point Application
function App(props) {
  const uiEmailStore= props.rootStore.getChildStoreInstance("uiMessageStore");
  const activeState= uiEmailStore.getActiveElement;
  return (
    <div className="container-generic">
      <NavBar></NavBar>
      {activeState === "INBOX" ? <InboxView></InboxView>: null}
      {activeState === "OUTBOX" ? <OutboxView></OutboxView>: null}
    </div>
  );
}

export default inject("rootStore")(observer(App));
