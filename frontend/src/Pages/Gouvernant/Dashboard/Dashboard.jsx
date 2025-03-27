import React from 'react'
import Navbar from '../../../Components/Navbar'
import Header from '../../../Components/Header/Header'
import Cards from './Cards'

function Dashboard() {
  return (
    <div className='bg-gray-50 flex'>
        <Navbar />

        <main className='flex-1 px-10 py-4'>
          <Header />
          <Cards />
        </main>
    </div>
  )
}

export default Dashboard