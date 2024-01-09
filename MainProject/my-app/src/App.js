import React from "react";
//import {BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

import { Tooltip as ReactTooltip}  from 'react-tooltip';

import "./path.css"
import Map from "./map"



function App(){
  return(
    <>
      <h1 style={{textAlign:"center"}}>지역을 선택해주세요.</h1>
      <Map></Map>
      <ReactTooltip id="region" place='right' float="true" variant='warning' />
    </>
  );
}

export default App;





