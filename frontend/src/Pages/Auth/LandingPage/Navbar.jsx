import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-40'>
        <div className='px-40 flex justify-between items-center py-5'>
            <a href="#">
              <img src="logo.jpeg" alt="logo" className='w-40 ' />
            </a>
            <ul className='flex space-x-10 text-sm font-semibold '> 
                <a href='#services' className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>Services</a>
                <a href='#how-solve-problem' className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>How we solve problem</a>
                <a href='#help' className='opacity-65 hover:opacity-100 hover:text-blue-400 tra'>Help</a>
            </ul>
            <Link to="/login" className='text-sm bg-blue-500 px-10 py-2.5 font-semibold rounded-md text-white cursor-pointer hover:bg-blue-700'>Login</Link>
        </div>
        <hr className='bg-gray-400 opacity-20 ' />
    </div>
  )
}

export default Navbar