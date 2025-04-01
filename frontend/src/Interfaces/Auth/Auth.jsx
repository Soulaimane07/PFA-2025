import React from 'react'
import Login from '../../Pages/Auth/Login'
import LandingPage from '../../Pages/Auth/LandingPage/LandingPage'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from '../../Pages/Auth/Register'

function Auth() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
)
}

export default Auth