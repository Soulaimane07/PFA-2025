import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import CreateNotification from './CreateNotification';
import HeaderButton from '../../../Components/Buttons/HeaderButton';
import Notification2 from '../../../Components/Notification/Notification2';
import NotificationModal from './NotificationModal';


function Main() {
  const notifications = useSelector(state => state.notifications.data)
  const [openCreate, setOpenCreate] = useState(false);
  const [modalOpen, setModalOpen] = useState(null); // State to control modal visibility

  const user = JSON.parse(localStorage.getItem('aiwater-user'))


  const [option, setOption] = useState("received")
  
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

      <div className='bg-gray-100 p-1 rounded-md w-fit flex text-gray-600'>
        <button onClick={()=> setOption("all")} className={`transition-all cursor-pointer px-6 py-1 rounded-l-md ${option === "all" ? "bg-white text-gray-950" : "bg-transparent hover:bg-gray-200"} `}> All </button>
        <button onClick={()=> setOption("sent")} className={`transition-all cursor-pointer px-6 py-1  ${option === "sent" ? "bg-white text-gray-950" : "bg-transparent hover:bg-gray-200"} `}> Sent </button>
        <button onClick={()=> setOption("received")} className={`transition-all cursor-pointer px-6 py-1  ${option === "received" ? "bg-white text-gray-950" : "bg-transparent hover:bg-gray-200"} `}> Recieves </button>
        <button onClick={()=> setOption("read")} className={`transition-all cursor-pointer px-6 py-1 rounded-r-md ${option === "read" ? "bg-white text-gray-950" : "bg-transparent hover:bg-gray-200"} `}> Read </button>
      </div>

      <div className='grid grid-cols-3 gap-4 px-10 justify-center items-stretch mt-10'>
        {notifications
          ?.filter((notif) => {
            if (option === "all") return true;
            if (option === "sent") return notif.userId === user._id;
            if (option === "received") return notif.toUserId === user._id;
            if (option === "read") return  notif.read;
            return true;
          })
          .map((notif, key) => (
            <Notification2 
              data={notif}
              type={notif.type}
              key={key}
              setModalOpen={setModalOpen}
            />
        ))}
      </div>

      {openCreate && <CreateNotification setOpenCreate={setOpenCreate} />}
      {modalOpen && <NotificationModal notification={modalOpen} setModalOpen={setModalOpen} userId={user._id} />}
    </div>
  )
}

export default Main