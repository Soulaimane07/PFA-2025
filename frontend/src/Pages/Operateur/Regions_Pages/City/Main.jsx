import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import axios from 'axios';

import StyledTable from '../../../../Components/Table/StyledTable';
import DeleteAlert from '../../../../Components/Alerts/DeleteAlert';
import { backendURL } from '../../../../Components/Variables';
import { fetchRegion } from '../../../../App/Slices/regionSlice';
import { fetchCity } from '../../../../App/Slices/citySlice';
import { fetchRegions } from '../../../../App/Slices/regionsSlice';
import HeaderButton from '../../../../Components/Buttons/HeaderButton';
import CreateFactory from './CreateFactory';

function Main() {
  const { regionId, cityId } = useParams();
  const city = useSelector((state) => state.city.data);
  const region = useSelector((state) => state.region.data);

  const [openCreate, setOpenCreate] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [factoryToDelete, setFactoryToDelete] = useState(null);

  const DeleteFactory = async (factory) => {
    try {
      await axios.delete(`${backendURL}/factories/${factory._id}`);
      dispatch(fetchRegions()); // Refresh the cities list
      dispatch(fetchRegion(regionId)); // Refresh the cities list
      dispatch(fetchCity(cityId)); // Refresh the cities list
      setFactoryToDelete(null);           
    } catch (error) {
      console.error("Failed to delete factory:", error);
    }
  };


  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchRegion(regionId));
    dispatch(fetchCity(cityId));
  }, [])

  return (
    <div className="bg-white pt-4 w-full rounded-md shadow-md">
      <div className="mb-4 px-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-600">
          {city?.city?.name} - City
        </h1>

        <HeaderButton text="Create Factory" setOpenCreate={setOpenCreate} />
      </div>

      <div className="mb-14 px-10 grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700">City Name</label>
          <p className="text-sm text-gray-500">{city?.city?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">City Code</label>
          <p className="text-sm text-gray-500">{city?.city?._id}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Region</label>
          <p className="text-sm text-gray-500">{region?.region?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Factories</label>
          <p className="text-sm text-gray-500">{city?.factories?.length} factory</p>
        </div>
      </div>

      <button
        onClick={() => setOpenTable(!openTable)}
        className={`w-full text-left text-gray-800 transition-all cursor-pointer flex items-center space-x-4 px-10 py-4 ${
          openTable ? 'bg-gray-100 font-semibold' : 'bg-white hover:bg-gray-100'
        }`}
      >
        {openTable ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        <p className="text-xl font-medium">
          Factories ({city?.factories?.length})
        </p>
      </button>

      <StyledTable 
        data={city?.factories} 
        open={openTable} 
        columns={[
          { header: 'Factory Name', accessor: 'name', link: (item) => `factories/${item._id}`  },
          { header: 'Sector', accessor: 'sector' },
          { header: '', accessor: '' },
        ]} 
        actions={[
          { label: 'Edit', onClick: (item) => setOpenCreate(item), className: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300' },
          { label: 'Delete', onClick: (item) => setFactoryToDelete(item), className: 'text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300' },
        ]} 
      />

      {openCreate && (
        <CreateFactory
          region={region?.region}
          city={city?.city}
          setOpenCreate={setOpenCreate}
          factory={openCreate === true ? null : openCreate}
        />
      )}

      <DeleteAlert
        text="Factory"
        open={!!factoryToDelete}
        onClose={() => setFactoryToDelete(null)}
        onConfirm={() => DeleteFactory(factoryToDelete)}
        cityName={factoryToDelete?.name}
      />
    </div>
  );
}

export default Main;
