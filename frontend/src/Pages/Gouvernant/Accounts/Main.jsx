import axios from 'axios'
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import CreateUser from './CreateUser/CreateUser'
import HeaderButton from '../../../Components/Buttons/HeaderButton'
import StyledTable from '../../../Components/Table/StyledTable'
import { useDispatch, useSelector } from 'react-redux'
import { backendURL } from '../../../Components/Variables'
import DeleteAlert from '../../../Components/Alerts/DeleteAlert'
import { fetchAccounts } from '../../../App/Slices/accountsSlice'

function Main() {
    const dispatch = useDispatch()


    const accounts = useSelector(state => state.accounts.data)
    const [openCreate, setOpenCreate] = useState(false)
    const [accountToDelete, setAccountToDelete] = useState(null);
    
    const DeleteAccount = async (accountToDelete) => {
        try {
          await axios.delete(`${backendURL}/users/${accountToDelete._id}`);
          dispatch(fetchAccounts()); // Refresh the cities list
          setAccountToDelete(null);           // Close the modal
        } catch (error) {
          console.error("Failed to delete account:", error);
          // Optional: show a toast or alert
        }
    };

    return (
        <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen '>
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-2xl font-bold opacity-50 mb-4  '> Accounts ( {accounts?.length} ) </h1>
                <div className='flex items-center'>
                    <div className='flex items-center  bg-gray-100 transition-all px-3 rounded-md py-1'>
                        <IoSearchOutline size={20} className='text-gray-500' />
                        <input type="search" placeholder='Search for accounts' className='w-60 py-1 px-4 outline-none' />
                    </div>

                    <HeaderButton text="Create Account" setOpenCreate={setOpenCreate} />
                </div>
            </div>

            <StyledTable
                data={accounts} 
                open={true} 
                columns={[
                    { header: 'Account Name', accessor: 'email', link: (item) => `factories/${item._id}`  },
                    { header: 'Fullname', accessor: 'fullName' },
                    { header: 'Type', accessor: 'type' },
                    { header: 'Region', accessor: 'region' },
                    { header: 'City', accessor: 'city' },
                    { header: '', accessor: '' },
                ]} 
                actions={[
                    { label: 'Edit', onClick: (item) => setOpenCreate(item), className: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300' },
                    { label: 'Delete', onClick: (item) => setAccountToDelete(item), className: 'text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300' },
                ]} 
            />

            {openCreate && <CreateUser setOpenCreate={setOpenCreate} />}
            <DeleteAlert text="Account" open={!!accountToDelete} onClose={() => setAccountToDelete(null)} onConfirm={() => DeleteAccount(accountToDelete)} cityName={accountToDelete?.email} />
        </div>
  )
}

export default Main