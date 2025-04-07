import React from 'react'

function Notification({id, data}) {
  return (
    <div className='bg-white flex justify-between shadow border rounded-sm border-red-400 h-40 w-80 '>
            <div className='bg-red-300 w-2 '></div>
            <div className='w-full px-4 py-2 pb-2.5 '>
              <div className='flex justify-between  text-gray-400 pb-4'>
                <h3 className=''>Alert  </h3>
                <h3 className=''>3min</h3>
            </div>
            
              <h1 className='text-xl' >  {data.title }</h1>
              <h4 className='opacity-60 text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</h4>
              </div>
          </div>
  )
}

export default Notification