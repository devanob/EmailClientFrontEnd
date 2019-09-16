import React, {Component} from "react";
import { observer,inject } from "mobx-react"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import InboxInstance from "./InboxInstance";
//Manages The Most Top Layer Of The Side Bar U.I
class OutboxView extends Component{
  constructor(props){
    super(props);
    this.state = {
        searchText: ""
    };
    
  }
  deleteSelected=()=>{
    this.props.rootStore.getChildStoreInstance("outboxStore").deleteSelected();
  }
  //Render Componet
  render() {
    const {rootStore} = this.props;
    const uiEmailStore= rootStore.getChildStoreInstance("uiMessageStore");
    const outBoxEmailStore= rootStore.getChildStoreInstance("outboxStore");
    const listoutboxMessages= rootStore.getChildStoreInstance("outboxStore").getOutboxEmails;
    const searchText = rootStore.getChildStoreInstance("uiMessageStore").getSearchString ;
    let toRender= null;
    if (listoutboxMessages===false){
      toRender = <div>YOU HAVE Sent No Messages</div>
    }
    else {
      const filteredEmails = listoutboxMessages.filter(message=>{
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
          <th>Destinated</th>
          <th>Subject</th>
          <th>Date Sent-----</th>
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

export default inject("rootStore")(observer(OutboxView));
