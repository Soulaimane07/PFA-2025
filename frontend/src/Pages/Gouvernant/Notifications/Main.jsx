import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Notification from '../../../Components/Notification/Notification';
import { useSelector } from 'react-redux';
import CreateNotification from './CreateNotification';
import HeaderButton from '../../../Components/Buttons/HeaderButton';


function Main() {
  const notifications = useSelector(state => state.notifications.data)
  const [openCreate, setOpenCreate] = useState(false);
  
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen '>
      <div className='flex justify-between items-center '>
        <h1 className='text-2xl font-bold opacity-50 mb-4  '> Notifications ( {notifications?.length} ) </h1>
        <div className='flex items-center'>
          <div className='flex items-center  bg-gray-100 transition-all px-3 rounded-md py-1'>
            <IoSearchOutline size={20} className='text-gray-500' />
            <input type="search" placeholder='Search for notifications' className='w-60 py-1 px-4 outline-none' />
          </div>

          <HeaderButton text="Create Notification" setOpenCreate={setOpenCreate} />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-6 px-10 justify-center items-center mt-10'>
        {notifications?.map((notif, key) => (
          <Notification key={key} id={1} data={notif} />
        ))}
      </div>

      {openCreate && <CreateNotification setOpenCreate={setOpenCreate} />}
    </div>
  )
}

export default Main