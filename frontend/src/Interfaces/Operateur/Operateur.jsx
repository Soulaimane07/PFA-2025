import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Operateur/Dashboard/Dashboard'
import Statistics from '../../Pages/Operateur/Statistics/Statistics'
import Regions from '../../Pages/Operateur/Regions_Pages/Regions/Regions'
import Region from '../../Pages/Operateur/Regions_Pages/Region/Region'
import City from '../../Pages/Operateur/Regions_Pages/City/City'
import Factory from '../../Pages/Operateur/Regions_Pages/Factory/Factory'
import Notification from '../../Pages/Operateur/Notifications/Notification'
import AboutPage from '../../Pages/Operateur/About/AboutPage'
import Devices from '../../Pages/Operateur/Devices/Devices'
import Settings from '../../Pages/Operateur/Settings/Settings'
import AccountsPage from '../../Pages/Operateur/Accounts/Accounts'

function Operateur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/statistiques' element={<Statistics />} />
        <Route path='/regions' >
          <Route index element={<Regions />} />
          <Route path=':regionId' element={<Region />} />
          <Route path=':regionId/cities/:cityId' element={<City />} />
          <Route path=':regionId/cities/:cityId/factories/:factoryId' element={<Factory />} />
        </Route>
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

export default Operateur