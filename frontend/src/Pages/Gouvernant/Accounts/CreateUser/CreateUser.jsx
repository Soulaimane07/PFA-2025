import React from 'react'
import { MdOutlineClose } from "react-icons/md";


function CreateUser({setOpenCreate}) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center'>
      <div className='bg-white p-5 rounded-md shadow-md w-1/3 min-h-80 py-6'>
        <div className='flex items-center justify-between mb-4 px-4'>
            <h1 className='text-2xl font-bold'> Create User </h1>
            <button onClick={()=> setOpenCreate(false)} className='text-gray-500 cursor-pointer hover:text-gray-700'> <MdOutlineClose size={26} /> </button>
        </div>
        
        <form className='space-y-4 px-5'>
            <div className='space-y-2'>
                <label htmlFor="fullName" className='text-gray-600'>Role</label>
                <select className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required> 
                    <option value="" disabled selected>Select your role</option>
                    <option value="admin">Gouvernant</option>
                    <option value="user">Minicipal</option>
                    <option value="guest">Industrial</option>
                </select>
            </div>

            <div className='space-y-2'>
                <label htmlFor="fullName" className='text-gray-600'>Full Name</label>
                <input type="text" placeholder='Enter your Full Name here' className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
            </div>
    
            <div className='space-y-2'>
                <label htmlFor="email" className='text-gray-600'>Email</label>
                <input type="email" placeholder='Enter your Email here' className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
            </div>
    
            <div className='space-y-2'>
                <label htmlFor="password" className='text-gray-600'>Password</label>
                <input type="password" placeholder='Enter your Password here' className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
            </div>
    
            <button type="submit" className='w-full h-12 cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-medium text-lg rounded-md'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser