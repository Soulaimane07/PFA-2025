import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Gouvernant/Dashboard/Dashboard/Dashboard'
import Regions from '../../Pages/Gouvernant/Regions/Regions'
import Statistics from '../../Pages/Gouvernant/Statistics/Statistics'
import Notification from "../../Pages/Gouvernant/Notifications/Notification"
import AboutPage from '../../Pages/Gouvernant/About/AboutPage'
import Devices from '../../Pages/Gouvernant/Devices/Devices'
import Settings from '../../Pages/Gouvernant/Settings/Settings'
import AccountsPage from '../../Pages/Gouvernant/Accounts/Accounts'

function Gouvernant() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/statistiques' element={<Statistics />} />
        <Route path='/regions' element={<Regions />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/accounts' element={<AccountsPage />} />
        <Route path='/*' element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Gouvernant