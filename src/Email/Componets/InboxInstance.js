import React, {Component} from "react";
import { observer,inject } from "mobx-react"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
//Manages The Most Top Layer Of The Side Bar U.I
class InboxMessageInstance extends Component{
  constructor(props){
    super(props);
}
  
  //Render Componet
  render() {
    const {messageInstance} = this.props;
    const ischecked  = messageInstance.getSelectedState;
    const fromEmail  = messageInstance.fromEmail;
    const subject  = messageInstance.subject;
    const date =  messageInstance.date;
    return (
     
        <tr>
          <td onClick={this.clickChecked}><Form.Check type="checkbox" checked={ischecked}  /></td>
          <td>{fromEmail}</td>
          <td>{subject}</td>
          <td>{date}</td>
        </tr>
     
    );
  }
  clickChecked=()=>{
    this.props.messageInstance.toggleSelected();
  }


  
  
}

export default observer(InboxMessageInstance);
