import React from 'react'

function Services() {
    const services = [
        {
            id: 1,
            name: 'Web Development',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 2,
            name: 'Web Development',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id: 3,
            name: 'Web Development',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
    ]

  return (
    <div id='services' className='py-32 px-40'>
        <h1 className='text-center font-bold text-4xl'> Top Quality Services </h1>
        <p className='text-center text-sm mt-4 opacity-60'> We are providing best digital services to our customers <br /> and give them satisfiction gurantee. </p>
        <div className='flex justify-center mt-14 space-x-10'>
              {services.map(service => (
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <svg class="w-7 h-7 text-gray-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900"> {service.name} </h5>
                    <p class="mb-3 font-normal text-gray-500"> {service.description} </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services