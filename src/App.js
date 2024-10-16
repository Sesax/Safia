import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Signaler from './pages/Signaler'

function App() {

  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/signaler' element={!user ? <Signaler /> : <Navigate to="/signaler" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;