import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Gouvernant/Dashboard/Dashboard'

function Gouvernant() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Gouvernant