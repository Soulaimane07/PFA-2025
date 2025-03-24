import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";


function Navbar() {
    const pages = [
        {
            "title": "Dashboard",
            "icon": LuLayoutDashboard,
            "link": "/dashboard"
        },
        {
            "title": "Statistiques",
            "icon": LuLayoutDashboard,
            "link": "/dashboard"
        },
        {
            "title": "Notifications",
            "icon": LuLayoutDashboard,
            "link": "/dashboard"
        },
        {
            "title": "Devices",
            "icon": LuLayoutDashboard,
            "link": "/dashboard"
        }
    ]

  return (
    <div className='h-screen bg-gray-100 w-60 px-10 py-10'>
        <img src='logo.jpeg' alt='logo' />

        <ul className='mt-6'>
            {pages.map((page, index) => (
                <li key={index} className='flex items-center space-x-2'>
                    <LuLayoutDashboard size={20} />
                    <p> {page.title} </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar 
