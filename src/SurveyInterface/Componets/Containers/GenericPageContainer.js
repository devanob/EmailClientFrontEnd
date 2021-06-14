import React /*,{Component}*/ from "react";
import "../../Assets/sass/GenericPageContainer.scss"
const GenericPageContainer = (props) => {
  // let children = props.children.length < 1 ? props.children.map(element => {
  //   return <div className="outty">{element}</div>
  // }) : props.children;
  return (
      <div className='react-transition swipe-down inner-page-container'>
         <div className='inner-container'>
             {props.children}
         </div>
      </div>
  )
}
//
export default GenericPageContainer ;
