import React from 'react'
import MapContent from './MapContent';

function Main() {
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md'>
        <h1 className='text-2xl font-bold opacity-50 mb-4'> Regions </h1>

        <MapContent />
    </div>
  )
}

export default Main