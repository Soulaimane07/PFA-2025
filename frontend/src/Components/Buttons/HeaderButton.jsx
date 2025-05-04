import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

function HeaderButton({text, setOpenCreate}) {
  return (
    <button 
        onClick={()=> setOpenCreate(true)} 
        className='bg-orange-400 rounded-md font-medium text-white py-2 px-6 m-2 transition-all hover:bg-orange-500 cursor-pointer'
    >
      <p className='flex items-center space-x-2'> 
        <IoAddCircleOutline size={20} /> 
        <span> {text} </span>
      </p>
    </button>

  )
}

export default HeaderButton