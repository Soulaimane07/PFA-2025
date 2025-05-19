import React, { useState } from 'react'
import Data from './Data';
import NoData from './NoData';


function Main() {

  const today = new Date().toISOString().split('T')[0];

  const [day, setDay] = useState(today)

  const data = day !== today
    
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold opacity-50 '> Statistics </h1>
        <div>
          <p className='text-xs font-medium opacity-40 mb-2'> Day </p>
          <input 
            type='date' 
            value={day} 
            onChange={(e)=> setDay(e.target.value)}
            className='px-2 py-1 border border-gray-900 rounded-md opacity-60 hover:opacity-100 transition-all' 
          />
        </div>
      </div>
      <div className='px-10'>
        {data 
          ? <Data />
          : <NoData />
        }
      </div>
    </div>
  )
}

export default Main