import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import CreateUser from './CreateUser/CreateUser'

function Main() {
    const [userslist, setUserslist] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3000/users")
        .then(res => {
            console.log(res.data)
            setUserslist(res.data)
        })
        .catch(err => { 
            console.log(err)
        })
    }, [])

    const [openCreate, setOpenCreate] = useState(false)

    return (
        <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen '>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold opacity-50 mb-4  '> Accounts ( {userslist.length} ) </h1>
                <div className='flex items-center'>
                    <div className='flex items-center  bg-gray-100 transition-all px-3 rounded-md py-1'>
                        <IoSearchOutline size={20} className='text-gray-500' />
                        <input type="search" placeholder='Search for notifications' className='w-60 py-1 px-4 outline-none' />
                    </div>

                    <button onClick={()=> setOpenCreate(true)} className='bg-blue-500 rounded-md font-medium text-white py-2 px-6 m-2 transition-all hover:bg-blue-400 cursor-pointer'>Create Account</button>
                </div>
            </div>


            <div className="bg-white mt-10 px-4 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Account name</th>
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Full name</th>
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Type</th>
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Region</th>
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">City</th>
                    <th className="text-left py-2 px-4 text-xs font-medium text-gray-500"></th>
                    </tr>
                </thead>
                <tbody>
                    {userslist.map((account) => (
                    <tr key={account.id} className="border-b border-gray-200">
                        <td className="py-2 px-4 text-md font-medium">{account.email}</td>
                        <td className="py-2 px-4 text-xs">{account.fullName}</td>
                        <td className="py-2 px-4 text-xs">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium text-white bg-${account.typeColor}-500`}>
                            {account.type}
                        </span>
                        </td>
                        <td className="py-2 px-4 text-xs">{account.city}</td>
                        <td className="py-2 px-4 text-xs">{account.city}</td>
                        <td className="py-2 px-4 text-xs">
                            <div className="flex space-x-2">
                                <button  
                                    className="px-3 py-1 rounded text-xs bg-gray-200 hover:bg-gray-300 cursor-pointer" 
                                    onClick={() => handleUpdateAccount(account.id)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="px-3 py-1 rounded text-xs bg-red-500 text-white hover:bg-red-600 cursor-pointer" 
                                    onClick={() => handleDeleteAccount(account.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {openCreate && <CreateUser setOpenCreate={setOpenCreate} />}
        </div>
  )
}

export default Main