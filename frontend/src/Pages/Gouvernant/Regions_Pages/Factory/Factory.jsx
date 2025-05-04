import React from 'react'
import Main from './Main'
import Navbar from '../../../../Components/Navbar/Navbar'
import Header from '../../../../Components/Header/Header'

function Factory() {
  return (
    <div className='bg-gray-50 flex'>
        <Navbar />

        <main className='flex-1 px-10 py-4'>
          <Header />
          <Main />
        </main>
    </div>
  )
}

export default Factory