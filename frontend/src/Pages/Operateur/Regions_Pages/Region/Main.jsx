import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CreateCity from './CreateCity';
import { fetchRegion } from '../../../../App/Slices/regionSlice';
import { useDispatch, useSelector } from 'react-redux';

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import DeleteAlert from '../../../../Components/Alerts/DeleteAlert';
import axios from 'axios';
import { backendURL } from '../../../../Components/Variables';
import StyledTable from '../../../../Components/Table/StyledTable';
import HeaderButton from '../../../../Components/Buttons/HeaderButton';



function Main() {
  const {regionId} = useParams()
  const region = useSelector((state) => state.region.data);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchRegion(regionId));
  }, [dispatch]);

  
  const [openCreate, setOpenCreate] = useState(false)
  const [openTable, setOpenTable] = useState(false)
  const [cityToDelete, setCityToDelete] = useState(null);



  const DeleteCity = async (cityToDelete) => {
    try {
      await axios.delete(`${backendURL}/cities/${cityToDelete._id}`);
      dispatch(fetchRegion(regionId)); // Refresh the cities list
      setCityToDelete(null);           // Close the modal
    } catch (error) {
      console.error("Failed to delete city:", error);
      // Optional: show a toast or alert
    }
  };


  console.log(region?.cities);
  



  
  return (
    <div className='bg-white  pt-4 w-full  rounded-md shadow-md'>
      <div className='mb-4 px-10 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-gray-600'> {region?.region.name} </h1>
        <HeaderButton text="Create City" setOpenCreate={setOpenCreate} />
      </div>
      
      <div className='mb-14 px-10 grid grid-cols-2 gap-6'>
        <div>
          <label className='text-sm font-semibold text-gray-700'>Region Name</label>
          <p className='text-sm text-gray-500'> {region?.region.name} </p>
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700'>Region Code</label>
          <p className='text-sm text-gray-500'> {region?.region._id} </p>
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700'>Total Cities</label>
          <p className='text-sm text-gray-500'> {region?.cities?.length} city</p>
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-700'>Factories</label>
          <p className='text-sm text-gray-500'> {region?.factories} factory</p>
        </div>
      </div>


      <button
        onClick={() => setOpenTable(!openTable)}
        className={`w-full text-left text-gray-800 transition-all cursor-pointer flex items-center space-x-4 px-10 py-4 ${
          openTable ? 'bg-gray-100 font-semibold' : 'bg-white hover:bg-gray-100'
        }`}
      >
        {!openTable 
          ? <FaAngleDown size={20} />
          : <FaAngleUp size={20} />
        }
        <p className='text-xl font-medium'>Cities ( {region?.cities?.length} ) </p>
      </button>

      <StyledTable 
        open={openTable} 
        data={region?.cities} 
        columns={[
          { header: 'City name', accessor: 'name', link: (item) => `cities/${item._id}` },
          { header: 'Factories', accessor: 'factories' },
          { header: '', accessor: '' },
        ]} 
        actions={[
          { label: 'Edit', onClick: (item) => setOpenCreate(item), className: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300' },
          { label: 'Delete', onClick: (item) => setCityToDelete(item), className: 'text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300' },
        ]} 
      />

      {openCreate && <CreateCity region={region?.region} setOpenCreate={setOpenCreate} city={openCreate === true ? null : openCreate} />}
      <DeleteAlert text="City" open={!!cityToDelete} onClose={() => setCityToDelete(null)} onConfirm={() => DeleteCity(cityToDelete)} cityName={cityToDelete?.name} />
    </div>
  )
}

export default Main