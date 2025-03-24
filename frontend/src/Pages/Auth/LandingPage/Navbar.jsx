import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='px-20 flex justify-between items-center py-5'>
            <img src="logo.jpeg" alt="logo" className='w-40 ' />
            <ul className='flex space-x-10 text-sm font-semibold '> 
                <li className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>Products</li>
                <li className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>Pricing</li>
                <li className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>Help</li>
            </ul>
            <Link to="/login" className='text-sm bg-blue-500 px-10 py-2.5 font-semibold rounded-md text-white cursor-pointer hover:bg-blue-700'>Login</Link>
        </div>
        <hr className='bg-gray-400 opacity-20 ' />
    </>
  )
}

export default Navbar