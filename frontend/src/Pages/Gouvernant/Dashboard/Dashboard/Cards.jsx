import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Cards() {
    const cards = [
        {
            "title": "Nombre de devices",
            "value": 100
        },
        {
            "title": "Nombre de regions",
            "value": useSelector(state => state.regions.data?.length)
        },
        {
            "title": "Nombre de notifications",
            "value": 10
        },
        {
            "title": "Nombre d'accounts",
            "value": 500
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