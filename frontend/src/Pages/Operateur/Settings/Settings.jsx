import React from 'react'
import Header from '../../../Components/Header/Header'
import Navbar from '../../../Components/Navbar/Navbar'

function Settings({pages}) {
  return (
    <div className='bg-gray-50 flex'>
        <Navbar pages={pages} />

        <main className='flex-1 px-10 py-4'>
            <Header />
            {/* <Main /> */}
        </main>
    </div>
  )
}

export default Settings