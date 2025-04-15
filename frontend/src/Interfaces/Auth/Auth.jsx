import React from 'react'
import Login from '../../Pages/Auth/Login'
import LandingPage from '../../Pages/Auth/LandingPage/LandingPage'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Register from '../../Pages/Auth/Register'

function Auth() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
)
}

export default Auth