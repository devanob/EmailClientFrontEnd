
import React, {Component} from "react";
import Nav from 'react-bootstrap/Nav'
import { observer} from "mobx-react"
class NavLink extends Component{
    constructor(props){
      super(props)
     
    }
    setState
    render() {
      const {uiState,props} = this.props;
      return (
        <Nav.Link onClick={()=>{
            this.onClick(uiState.stateName);
        }} variant="flat" className="customLinks" href={uiState.link}>{uiState.uiName}</Nav.Link>
      );
    }
    onClick =(state)=>{
        this.props.onClick(state);
    }
    
    
  }
  export default  observer(NavLink)