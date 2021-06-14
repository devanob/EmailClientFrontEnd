import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../Assets/sass/PreSurvey.scss"
import { useStores } from '../hooks/use-stores'
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import CustomButton from "../Componets/ElementComponet/CustomButton";
import getUrlFromRoute from "../Route/getUrlFromRoute";
import  MAIN_ROUTES from "../Route/MAIN_ROUTES";


const PreSurveyPage = observer((props) => {
  const { rootStore } = useStores();
  let home = getUrlFromRoute(MAIN_ROUTES,'ROOT');
  let pre_interview = getUrlFromRoute(MAIN_ROUTES,'pre-interview');
  return (
      <GenericPageContainer>
          <CustomButton to={ pre_interview } >
                       Let's Start    
          </CustomButton>
          <CustomButton to={home}>
                      Previous   
          </CustomButton>
      </GenericPageContainer>
  )
})
//
export default PreSurveyPage;
