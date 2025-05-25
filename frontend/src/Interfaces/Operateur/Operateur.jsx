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

import { LuLayoutDashboard } from "react-icons/lu";
import { IoNotificationsOutline  } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import History from '../../Pages/Operateur/History/History'

function Operateur() {

  const pages = [
      {
          "title": "Dashboard",
          "icon": LuLayoutDashboard,
          "link": "/"
      },
      {
          "title": "Statistiques",
          "icon": IoBarChartOutline,
          "link": "/statistiques"
      },
      {
          "title": "Regions",
          "icon": MdOutlinePlace,
          "link": "/regions"
      },
      {
          "title": "Notifications",
          "icon": IoNotificationsOutline ,
          "link": "/notifications"
      },
      {
          "title": "Devices",
          "icon": CiStreamOn,
          "link": "/devices"
      }
  ]


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard pages={pages} />} />
        <Route path='/statistiques'>
          <Route index element={<Statistics pages={pages} />} />
          <Route path='history' element={<History pages={pages} />} />
        </Route>
        <Route path='/regions' >
          <Route index element={<Regions pages={pages} />} />
          <Route path=':regionId' element={<Region pages={pages} />} />
          <Route path=':regionId/cities/:cityId' element={<City pages={pages} />} />
          <Route path=':regionId/cities/:cityId/factories/:factoryId' element={<Factory pages={pages} />} />
        </Route>
        <Route path='/notifications' element={<Notification pages={pages} />} />
        <Route path='/about' element={<AboutPage pages={pages} />} />
        <Route path='/devices' element={<Devices pages={pages} />} />
        <Route path='/settings' element={<Settings pages={pages} />} />
        <Route path='/accounts' element={<AccountsPage pages={pages} />} />
        <Route path='/*' element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Operateur