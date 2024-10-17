import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar";

import Home from './pages/Home'
import Login from './pages/Login'
import Signaler from './pages/Signaler'
import Boutique from './pages/Boutique'
import Defis from './pages/Defis'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signaler />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signaler' element={<Signaler />} />
        <Route path='/boutique' element={<Boutique />} />
        <Route path='/defis' element={<Defis/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;