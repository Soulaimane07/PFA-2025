import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Cards() {
    const cards = [
        {
            "title": "Number of devices",
            "value": useSelector(state => state.devices.data?.length) || 0
        },
        {
            "title": "Number of regions",
            "value": useSelector(state => state.regions.data?.length) || 0
        },
        {
            "title": "Number of notifications",
            "value": useSelector(state => state.notifications.data?.length) || 0
        },
        {
            "title": "Number of accounts",
            "value": useSelector(state => state.accounts.data?.length) || 0
        }
    ]

  return (
    <div className='flex space-x-4'>
        {cards.map((card, index) => (
            <div key={index} className='bg-white p-4 px-5 w-full rounded-md shadow-md'>
                <div className='flex items-center justify-between'>
                    <p className='opacity-60'> {card.title} </p>
                    <button className='opacity-60 hover:opacity-90 cursor-pointer'> <IoSettingsOutline size={18} /> </button>
                </div>
                <h1 className='mt-2 text-2xl font-medium mb-6'> {card.value} </h1>

                <hr className='opacity-10 mb-2' />
                <p className='opacity-60'> Description </p>
            </div>
        ))}
    </div>
  )
}

export default Cards