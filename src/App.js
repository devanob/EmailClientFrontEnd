import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import RenderRoutes from "./SurveyInterface/Route/RenderRoutes";
import  MAIN_ROUTES from "./SurveyInterface/Route/MAIN_ROUTES";
import "./SurveyInterface/Assets/css/react-transistions.css";
import { useStores } from './SurveyInterface/hooks/use-stores'
import { observer } from 'mobx-react';
import data from './SurveyInterface/Data/PreInterView/Pages'



//Entry Point Application
function App() {
  const { rootStore } = useStores();
  const uiStore = rootStore.uiStore;
  let style = {
    height : uiStore.windowDimensions.height
  }
  return (
    <div style={style} className='app-container transition-container'>
        <RenderRoutes routes={MAIN_ROUTES} />
    </div>
  );
}

export default observer(App);