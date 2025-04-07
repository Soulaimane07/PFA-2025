import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Notification from '../../../Components/Notification/Notification';
import { notifications } from '../../../Components/Variables';


function Main() {
  const listenotification = notifications
  
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md '>
      <div className='flex justify-between items-center '>
        <h1 className='text-2xl font-bold opacity-50 mb-4 '> Notifications ( {listenotification.length} ) </h1>
        <div className='flex items-center'>
          <div className='flex items-center  bg-gray-300 px-3 rounded-md py-1'>
            <IoSearchOutline size={20} className='text-gray-500' />
            <input type="search" placeholder='Search for notifications' className='w-60 py-1 px-4 outline-none' />
          </div>

          <button className='bg-blue-700 rounded-md text-white py-2 px-6 m-2'>Create Notification</button>
        </div>
      </div>


      <div className='flex flex-wrap justify-center space-x-6 mt-10 space-y-6'>
        {listenotification.map((notif) => (
          <Notification id={1} data={notif} />
        ))}
      </div>
    </div>
  )
}

export default Main