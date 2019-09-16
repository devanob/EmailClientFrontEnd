import React, {Component} from "react";
import { inject, observer} from 'mobx-react';
import "../css/NavBar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import NavLinks from "./NavLinks";
import Search from "./Search";
class NavBar extends Component{
  constructor(props){
    super(props)
   
  } 
  //Toggles The State Of The NavBar
  toggleSideBarState= ()=>{
    this.props.rootStore.uiUserStore.toggleSideBarActive();
  }
  render() {
    const {rootStore} = this.props;
    const uiEmailStore= rootStore.getChildStoreInstance("uiMessageStore");
    const searchText = rootStore.getChildStoreInstance("uiMessageStore").getSearchString ;
    const listViableStates= rootStore.getChildStoreInstance("uiMessageStore").getViableState
    const navBrand = uiEmailStore.getNavBrand;

    return (

    <Navbar bg="" expand="md" variant="" className="custom-nav" >
      <Navbar.Brand href="">{navBrand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto customNav">
          {/* Nav Links Navigation */}
          {listViableStates.map(state=>{
            return (<NavLinks uiState={state} onClick={this.uiStateChangeHandler}></NavLinks>);
          })}

        </Nav>
       <Search value={searchText} onChange={this.onSearchTextChange} ></Search>
      </Navbar.Collapse>
    </Navbar>
    );
     
  }
  uiStateChangeHandler=(state)=>{
    const uiEmailStore= this.props.rootStore.getChildStoreInstance("uiMessageStore");
    uiEmailStore.setActiveElement(state);

  }
  onSearchTextChange=(event)=>{
    const uiEmailStore= this.props.rootStore.getChildStoreInstance("uiMessageStore");
    uiEmailStore.setSearchString(event.target.value);
  }
  
}
export default  inject("rootStore")(observer(NavBar));
