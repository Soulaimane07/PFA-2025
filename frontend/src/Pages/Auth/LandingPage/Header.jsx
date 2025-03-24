import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='flex p-20 space-x-10'>
        <div className=" w-full flex flex-col items-start">
            <div className='flex items-center space-x-4 mb-10'>
                <hr className='w-40 h-1 bg-blue-500 rounded-full border-0' />
                <p className='text-blue-600 font-semibold'>No credit card required</p>
            </div>
            <h1 className='font-semibold text-5xl'>The largest Cloud-Based Water management system</h1>
            <p className='text-gray-500 mt-6 mb-14'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            </p>
            <Link to="/login" className='bg-blue-500 w-auto flex space-x-5 items-center cursor-pointer hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-5'>
                <p>Get Started</p>
                <FaArrowRightLong />
            </Link>
        </div>
        <div className="headerimage w-full h-90 rounded-lg">
        </div>
    </div>
    
  )
}

export default Header