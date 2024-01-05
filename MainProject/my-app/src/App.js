import React from "react";
//import {BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

import { Tooltip as ReactTooltip}  from 'react-tooltip';

import "./path.css"
import Map from "./map"



function App(){
  return(
    <>
      <Map></Map>

      <ReactTooltip id="region" place='right' float="true" variant='warning' />
    </>
  );
}

export default App;





