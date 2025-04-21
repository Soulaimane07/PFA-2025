import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Weater from '../Weater/Weater';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";


function Header() {
  const user = JSON.parse( localStorage.getItem('aiwater-user'))

  const [showLogout, setShowLogout] = useState(false)


  const navigate = useNavigate()


  const LogoutFun = () => {
    console.log("looged out");
    localStorage.removeItem('aiwater-user')
    navigate("/")
    window.location.reload()
  }

  return (
    <hea className='flex items-center justify-between mb-6'>
      <div>
        <Weater />
      </div>

      <div className=' h-20 items-center justify-center flex space-x-8'>
        <Link to="/notifications" className='hover:text-gray-800 transition-all cursor-pointer'> 
          <IoNotifications size={24} /> 
        </Link>

        <div className='relative'>
          <button onClick={()=> setShowLogout(!showLogout)}  className='flex min-w-84 transition-all hover:bg-gray-50 justify-between cursor-pointer shadow-md items-center rounded-full bg-white py-3 px-5 space-x-10'> 
            <p>
              <span className='font-medium'> {user.fullName}  </span>
              <span> - Gouvernant </span>
            </p>
            {!showLogout ? <FaAngleUp size={20} /> :  <FaAngleDown size={20} />}
          </button>

          {showLogout &&(
              <div className='w-80 z-40 bg-gray-100 absolute top-15 right-2 rounded-md shadow-md px-4 py-4'>
                <div className='bg-white flex items-center justify-center rounded-full w-20 h-20 mx-auto'>
                  <FaUserAlt size={26} className='text-gray-500' />
                </div>
                <p className='text-center py-4 font-medium'> {user.email} </p>
                <button onClick={LogoutFun} className='bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-400 transition-all cursor-pointer'> Log out </button>
              </div>
          )}
        </div>
      </div>
    </hea>
  )
}

export default Header