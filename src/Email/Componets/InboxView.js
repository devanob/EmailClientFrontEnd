import React, {Component} from "react";
import { observer,inject } from "mobx-react"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import InboxInstance from "./InboxInstance";
//Manages The Most Top Layer Of The Side Bar U.I
class InboxView extends Component{
  constructor(props){
    super(props);
    this.state = {
        searchText: ""
    };
    
  }
  deleteSelected=()=>{
    this.props.rootStore.getChildStoreInstance("inboxStore").deleteSelected();
  }
  //Render Componet
  render() {
    const {rootStore} = this.props;
    const uiEmailStore= rootStore.getChildStoreInstance("uiMessageStore");
    const inboxEmailStore= rootStore.getChildStoreInstance("inboxStore");
    const listInboxMessages= rootStore.getChildStoreInstance("inboxStore").getInboxEmails;
    const searchText = rootStore.getChildStoreInstance("uiMessageStore").getSearchString ;
    let toRender= null;
    if (listInboxMessages===false){
      toRender = <div>YOU HAVE Received No Messages</div>
    }
    else {
      const filteredEmails = listInboxMessages.filter(message=>{
      return message.fromEmail.toLowerCase().includes(searchText.toLowerCase());
      });
      toRender = filteredEmails.map(email=>{
        return (<InboxInstance key={email.id}  id={email.id} messageInstance = {email}> </InboxInstance>)
      })


    }
    
    //filter based on search stuff
    return (
      <>
      <div className="menu">
        <div><button onClick ={this.deleteSelected}>Delete Selected</button></div>
        <div><button>Archived Selected</button></div>
      </div>
      <Table striped bordered hover responsive="md">
      <thead>
        <tr>
          <th></th>
          <th>Sender</th>
          <th>Subject</th>
          <th>Date Received</th>
        </tr>
      </thead>
      <tbody>
        {toRender}
      </tbody>
      </Table>
      </>
    );
  }

  
  
}

export default inject("rootStore")(observer(InboxView));
