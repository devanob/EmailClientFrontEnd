import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../Assets/sass/button.scss"

function CustomButton(props) {
    let onClick_handlier = props.onClick;
    let to=  props.to ? props.to : null;
    let exact=  props.exact ? props.exact : false;
    return (

    to ? <Link  
    to={to}
    exact={exact} className='custom-button'>
        <button className='inner-button' onClick={onClick_handlier} >
            {props.children}
        </button>
    </Link> :  <button className='inner-button' onClick={onClick_handlier} >
            {props.children}
        </button>
    );
  
}
export default   CustomButton;
