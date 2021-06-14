import React /*,{Component}*/ from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step } from "react-step-progress-bar";
import { observer } from 'mobx-react';
import "../../Assets/sass/ProgressBar.scss"

const StepProgressBar =(props)=> {
    //incomplete
    let InCompletestepPostion = [...Array(2).keys()];
    InCompletestepPostion =InCompletestepPostion.map(index=>{
          return (index / InCompletestepPostion.length) *100;
        })
        let style_incomplete = {
          width: `calc(28px * ${InCompletestepPostion.length})`,
          maxWidth: `calc(28px * ${InCompletestepPostion.length})`,

      };
      //inprogress
      let InProgresstepPostion = [...Array(1).keys()];
      InProgresstepPostion = InProgresstepPostion.map(index=>{
          return (index / InProgresstepPostion.length) *100;
      });
      //completed
      let CompletedstepPostion = [...Array(2).keys()];
      CompletedstepPostion = CompletedstepPostion.map(index=>{
          return (index / CompletedstepPostion.length) *100;
      });
      let style_complete = {
        width: `calc(28px * ${CompletedstepPostion.length})`,
        maxWidth: `calc(28px * ${CompletedstepPostion.length})`,

    };
        
      
    
    return  (
      <div className='progress-bars-total-container'>
        <div  style={style_complete} className={'completed-progress'}>
            <ProgressBar  /*stepPositions={stepPostion}*/ 
              percent={100}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
              {CompletedstepPostion.map((item,key)=>{
                return (<Step transition="scale" key={`step-id-${key}`} >
                {({ accomplished }) => (
                  <div className='step-containers'></div>
                )}
              </Step>);
              })}
            </ProgressBar>
        </div>
         <div   className={'in-progress-progress'}>
            <ProgressBar  
              percent={75}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
              {InProgresstepPostion.map((item,key)=>{
                return (<Step transition="scale" key={`step-id-${key}`} >
                {({ accomplished }) => (
                  <div className='step-containers'></div>
                )}
              </Step>);
              })}
            </ProgressBar>
        </div>
        {InCompletestepPostion.length > 1 ? <div  style={style_incomplete} className={'incomplete-progress'}>
            <ProgressBar  /*stepPositions={stepPostion}*/ 
              percent={0}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
              {InCompletestepPostion.map((item,key)=>{
                return (<Step transition="scale" key={`step-id-${key}`} >
                {({ accomplished }) => (
                  <div className='step-containers'></div>
                )}
              </Step>);
              })}
            </ProgressBar>
        </div> : "" }
        
      </div>
    );
}

export default StepProgressBar;