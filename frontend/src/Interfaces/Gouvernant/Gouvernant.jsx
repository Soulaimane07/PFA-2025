import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Gouvernant/Dashboard/Dashboard/Dashboard'
import Regions from '../../Pages/Gouvernant/Regions/Regions'
import Statistics from '../../Pages/Gouvernant/Statistics/Statistics'
import Notification from "../../Pages/Gouvernant/Notifications/Notification"
import AboutPage from '../../Pages/Gouvernant/AboutPage'

function Gouvernant() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/statistiques' element={<Statistics />} />
        <Route path='/regions' element={<Regions />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Gouvernant