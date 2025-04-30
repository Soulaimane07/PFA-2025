import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import axios from 'axios';

import CreateIndustry from './CreateIndustry';
import StyledTable from '../../../Components/Table/StyledTable';
import DeleteAlert from '../../../Components/Alerts/DeleteAlert';
import { backendURL } from '../../../Components/Variables';
import { fetchRegion } from '../../../App/Slices/regionSlice';
import { fetchCity } from '../../../App/Slices/citySlice';
import { fetchRegions } from '../../../App/Slices/regionsSlice';

function Main() {
  const { regionId, cityId } = useParams();
  const city = useSelector((state) => state.city.data);
  const region = useSelector((state) => state.region.data);

  const [openCreate, setOpenCreate] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [industryToDelete, setIndustryToDelete] = useState(null);

  const DeleteIndustry = async (industry) => {
    try {
      await axios.delete(`${backendURL}/industries/${industry._id}`);
      dispatch(fetchRegions()); // Refresh the cities list
      dispatch(fetchRegion(regionId)); // Refresh the cities list
      dispatch(fetchCity(cityId)); // Refresh the cities list
      setIndustryToDelete(null);           
    } catch (error) {
      console.error("Failed to delete industry:", error);
    }
  };


  const columns = [
    { header: 'Industry Name', accessor: 'name', link: (item) => `industries/${item._id}`  },
    { header: 'Sector', accessor: 'sector' },
    { header: '', accessor: '' },
  ];

  const actions = [
    {
      label: 'Edit',
      onClick: (item) => setOpenCreate(item),
      className: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300',
    },
    {
      label: 'Delete',
      onClick: (item) => setIndustryToDelete(item),
      className: 'text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300',
    },
  ];


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
        <button
          onClick={() => setOpenCreate(true)}
          className="bg-blue-500 flex items-center space-x-2 text-white hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all px-8 py-3 mt-2 cursor-pointer rounded-md text-sm font-medium"
        >
          <IoAddCircleOutline size={20} />
          <span>Add Industry</span>
        </button>
      </div>
      <div className="mb-14 px-10 grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700">City Name</label>
          <p className="text-sm text-gray-500">{city?.city?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Region</label>
          <p className="text-sm text-gray-500">{region?.region?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Industries</label>
          <p className="text-sm text-gray-500">{city?.industries?.length} industry</p>
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
          Industries ({city?.industries?.length})
        </p>
      </button>

      <StyledTable data={city?.industries} columns={columns} open={openTable} actions={actions} />

      {openCreate && (
        <CreateIndustry
          region={region?.region}
          city={city?.city}
          setOpenCreate={setOpenCreate}
          industry={openCreate === true ? null : openCreate}
        />
      )}

      <DeleteAlert
        open={!!industryToDelete}
        onClose={() => setIndustryToDelete(null)}
        onConfirm={() => DeleteIndustry(industryToDelete)}
        cityName={industryToDelete?.name}
      />
    </div>
  );
}

export default Main;
