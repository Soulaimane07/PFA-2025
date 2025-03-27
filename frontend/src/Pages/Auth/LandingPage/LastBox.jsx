import React from 'react'

function LastBox() {
  return (
    <div id='help' className='customer h-96 bg-blue-50 flex justify-center items-center px-40'>
        <div className='w-full flex items-center justify-between'>
            <img src="customer2.png" alt="customer" className='w-80' />
        </div>
        <div className='w-full'>
            <h1 className='text-4xl font-semibold'> What say our customer </h1>
            <p className='mt-6 mb-10'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"> Get started now </button>
        </div>
    </div>
  )
}

export default LastBox