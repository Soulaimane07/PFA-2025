import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircleOutline  } from "react-icons/io5";
import { IoNotificationsOutline  } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import { NavLink } from 'react-router-dom';


function Navbar() {
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
            "title": "Notifications",
            "icon": IoNotificationsOutline ,
            "link": "/notifications"
        },
        {
            "title": "Accounts",
            "icon": FiUsers,
            "link": "/accounts"
        },
        {
            "title": "Regions",
            "icon": MdOutlinePlace,
            "link": "/regions"
        },
        {
            "title": "Devices",
            "icon": CiStreamOn,
            "link": "/devices"
        }
    ]

    const others = [
        {
            "title": "Settings",
            "icon": IoSettingsOutline,
            "link": "/settings"
        },
        {
            "title": "About",
            "icon": IoHelpCircleOutline,
            "link": "/about"
        }
    ]

  return (
    <div className='h-screen bg-white w-64 px-6 py-10'>
        <img src='logo.jpeg' alt='logo' className='w-40 mx-auto' />

        <div className='mb-10 mt-10'>
            <h2 className='text-sm font-semibold opacity-40 mt-4'>Menu</h2>
            <ul className='mt-4 space-y-2'>
                {pages.map((page, index) => (
                    <NavLink
                        to={page.link}
                        key={index}
                        className={({ isActive }) =>
                        `flex w-full cursor-pointer items-center space-x-2 px-4 py-3 font-normal rounded-md transition-all ${
                            isActive
                            ? 'bg-blue-100 text-blue-700' // Active state styles
                            : 'text-gray-400 hover:bg-blue-100 hover:text-blue-700' // Default state styles
                        }`
                        }
                    >
                        <page.icon size={20} />
                        <p>{page.title}</p>
                    </NavLink>
                ))}
            </ul>
        </div>
        <div>
            <hr className=' opacity-20' />
            <h2 className='text-sm font-semibold opacity-40 mt-4'>Other</h2>
            <ul className='mt-4 space-y-2'>
                {others.map((page, index) => (
                    <NavLink
                        to={page.link}
                        key={index}
                        className={({ isActive }) =>
                        `flex w-full cursor-pointer items-center space-x-2 px-4 py-3 font-normal rounded-md transition-all ${
                            isActive
                            ? 'bg-blue-100 text-blue-700' // Active state styles
                            : 'text-gray-400 hover:bg-blue-100 hover:text-blue-700' // Default state styles
                        }`
                        }
                    >
                        <page.icon size={20} />
                        <p>{page.title}</p>
                    </NavLink>
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar 
