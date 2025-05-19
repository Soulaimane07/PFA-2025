import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Header from '../../../Components/Header/Header'
import Cards from './Cards'
import Charts from './Charts'
import Notifications from './Notifications'


function Dashboard({pages}) {

  

  return (
    <div className='bg-gray-50 flex'>
        <Navbar pages={pages} />

        <main className='flex-1 px-10 py-4'>
          <Header />
          <Cards />
          <div className='mt-4 flex space-x-4 items-stretch'>
            <Charts />
            <Notifications />
          </div>
        </main>
    </div>
  )
}

export default Dashboard