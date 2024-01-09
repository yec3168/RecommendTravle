import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tooltip as ReactTooltip}  from 'react-tooltip';

import Map from "./map"
import Board from "./board/board"
import Home from "./board/home"
import Login from "./user/login"
import Signup from "./user/signup";

function Router() {
  return (
    <BrowserRouter>
     <h1 style={{textAlign:"center"}}>지역을 선택하세요.</h1>
      <Routes>
        <Route path="/board" element={<Board />}/>
        <Route path="/home" element={<Home />}/>
        <Route path='/login' Component={<Login />} />
        <Route path='/home' Component={<Home />} />
        <Route path='/signup' Component={<Signup />} />
      </Routes>
      <Map />
      <ReactTooltip id="region" place='right' float="true" variant='warning' />
    </BrowserRouter>
  )
}

export default Router;