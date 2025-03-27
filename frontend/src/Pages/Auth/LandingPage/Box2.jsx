import React from 'react'

function Box2() {
  return (
    <div id='how' className='customer py-72 flex justify-between space-x-10 items-center px-60'>
        <div className='w-full'>
            <h1 className='text-4xl font-semibold'> What customers get <br /> from us </h1>
            <p className='mt-6'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
            <ul className='mt-5 space-y-2'>
                <li>Collaboration Feature</li>
                <li>Real time Feedback</li>
                <li>24/7 Customer Spport</li>
            </ul>
        </div>
        <div className='w-full flex items-center justify-between'>
            <img src="customer1.avif" alt="customer" className='w-96' />
        </div>
    </div>
  )
}

export default Box2