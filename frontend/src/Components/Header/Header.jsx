import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

function Header() {
  return (
    <div className='flex items-center justify-between mb-6'>
      <div>

      </div>

      <div className=' h-20 items-center justify-center flex space-x-8'>
        <button> <IoNotifications size={24} /> </button>
        
        <div className='flex items-center rounded-full bg-white py-3 px-5 space-x-10'> 
          <p> Soulaimane - Gouvernant </p>
          <FaAngleDown size={20} />
        </div>
      </div>
    </div>
  )
}

export default Header