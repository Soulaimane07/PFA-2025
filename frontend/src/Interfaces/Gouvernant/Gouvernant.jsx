import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Gouvernant/Dashboard/Dashboard/Dashboard'
import Regions from '../../Pages/Gouvernant/Regions/Regions'

function Gouvernant() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/regions' element={<Regions />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Gouvernant