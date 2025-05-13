import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchRegion } from '../../../../App/Slices/regionSlice';
import { fetchCity } from '../../../../App/Slices/citySlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFactory } from '../../../../App/Slices/factorySlice';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import StyledTable from '../../../../Components/Table/StyledTable';

function Main() {
  const { regionId, cityId, factoryId } = useParams();
  const dispatch = useDispatch()

  const region = useSelector((state) => state.region.data);
  const city = useSelector((state) => state.city.data);
  const factory = useSelector((state) => state.factory.data);


  const [openTable, setOpenTable] = useState(false);
  

  useEffect(()=> {
    dispatch(fetchRegion(regionId));
    dispatch(fetchCity(cityId));
    dispatch(fetchFactory(factoryId));
  }, [])



  return (
    <div className='bg-white  pt-4 w-full  rounded-md shadow-md'>
      <div className="mb-4 px-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-600">
          {factory?.factory?.name} - Factory
        </h1>

        {/* <HeaderButton text="Create Factory" setOpenCreate={setOpenCreate} /> */}
      </div>

      <div className="mb-14 px-10 grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700">Factory Name</label>
          <p className="text-sm text-gray-500">{factory?.factory?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Factory Code</label>
          <p className="text-sm text-gray-500">{factory?.factory?._id}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Region</label>
          <p className="text-sm text-gray-500">{region?.region?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Region Code</label>
          <p className="text-sm text-gray-500">{regionId}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">City</label>
          <p className="text-sm text-gray-500">{city?.city?.name}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">City Code</label>
          <p className="text-sm text-gray-500">{cityId}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">Total Devices</label>
          <p className="text-sm text-gray-500">{factory?.devices?.length} device</p>
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
          Devices ({factory?.devices?.length})
        </p>
      </button>

      <StyledTable
        data={factory?.devices} 
        open={openTable} 
        columns={[
          { header: 'Device Title', accessor: 'title', link: (item) => `/devices/${item._id}`  },
          { header: 'Sector', accessor: 'sector' },
          { header: '', accessor: '' },
        ]} 
        actions={[
          // { label: 'Edit', onClick: (item) => setOpenCreate(item), className: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300' },
          // { label: 'Delete', onClick: (item) => setFactoryToDelete(item), className: 'text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300' },
        ]} 
      />
    </div>
  )
}

export default Main