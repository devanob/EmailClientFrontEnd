import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../Assets/sass/Landing.scss"
import { useStores } from '../hooks/use-stores'
import  MAIN_ROUTES from "../Route/MAIN_ROUTES";
// import { _allowStateChangesInsideComputed } from "mobx";
import getUrlFromRoute from "../Route/getUrlFromRoute";
import { Link } from "react-router-dom";
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import  StartButton from '../Assets/image/svg/StartButten.svg' ;
import LandingBackground from "../Assets/image/jpg/LandingBackground.jpg"
import "../Assets/sass/Landing.scss";

//componet start here
const LandingPage = observer((props) => {
  const { rootStore } = useStores();
  let next_page = getUrlFromRoute(MAIN_ROUTES,'pre-interview-information');
  return (
      <GenericPageContainer>
              <div className='page-background'>
                <img src={LandingBackground}></img>
              </div>
              <div className="inner">

              </div>
              <div className="start-buttton-container">
                <div className="inner">
                    <Link className='start-button' to={next_page}> 
                            Start
                            <svg data-src={StartButton }/>

                    </Link>
                </div>
            </div>
              
      </GenericPageContainer>
  )
})
//
export default  LandingPage;
