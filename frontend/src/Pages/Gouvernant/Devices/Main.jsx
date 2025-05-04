import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import Device from '../../../Components/Device/Device';
import { useSelector } from 'react-redux';
import CreateDevice from './CreateDevice';
import HeaderButton from '../../../Components/Buttons/HeaderButton';

function Main() {
    const devices = useSelector((state)=> state.devices.data)

    const [openCreate, setOpenCreate] = useState(false)

  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen '>
      <div className='flex justify-between items-center '>
        <h1 className='text-2xl font-bold opacity-50 mb-4  '> Devices ( {devices?.length} ) </h1>
        <div className='flex items-center'>
          <div className='flex items-center  bg-gray-100 transition-all px-3 rounded-md py-1'>
            <IoSearchOutline size={20} className='text-gray-500' />
            <input type="search" placeholder='Search for devices' className='w-60 py-1 px-4 outline-none' />
          </div>

          <HeaderButton text="Create Device" setOpenCreate={setOpenCreate} />
        </div>
      </div>


      <div className='grid grid-cols-3 gap-6 px-10 justify-center items-center mt-10'>
        {devices?.map((device, key) => (
          <Device key={key} data={device} />
        ))}
      </div>

      {openCreate && <CreateDevice setOpenCreate={setOpenCreate} />}
    </div>
  )
}

export default Main