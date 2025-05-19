import React, { useState } from 'react'
import MapContent from './MapContent';
import { useSelector } from 'react-redux';
import StyledTable from '../../../../Components/Table/StyledTable';

function Main() {
  const [option, setOption] = useState(0)
  const regions = useSelector((state) => state.regions.data);
  
  return (
    <div className='bg-white p-10 w-full  rounded-md shadow-md'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold opacity-50 mb-4'> Regions </h1>

        <div className='bg-gray-50 text-gray-800 p-1 rounded-md space-x-0.5'>
          <button onClick={()=> setOption(0)} className={`${option === 0 && "text-blue-500 bg-white"} cursor-pointer rounded-l-md hover:bg-gray-100 transition-all p-1 px-6 font-medium`}>Table</button>
          <button onClick={()=> setOption(1)} className={`${option === 1 && "text-blue-500 bg-white"} cursor-pointer rounded-r-md hover:bg-gray-100 transition-all p-1 px-6 font-medium`}>Map</button>
        </div>
      </div>

      {option === 0 &&
        <StyledTable
          open={true}
          data={regions}
          columns={[
            { header: 'Region name', accessor: 'name', link: (item) => `${item._id}` },
            { header: 'Cities', accessor: 'cities' },
            { header: 'Factories', accessor: 'factories' },
            { header: 'Devices', accessor: 'devices' },
            { header: '', accessor: '' },
          ]}
        />  
      }
      {option === 1 && <MapContent />}
    </div>
  )
}

export default Main