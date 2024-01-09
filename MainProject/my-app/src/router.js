import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Board from "./board/board"
import Home from "./board/home"
import Login from './user/login';
import Signup from './user/signup';
import Select from './select';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Select />} />
        <Route path="/board" element={<Board />}/>
        <Route path="/home" element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router;