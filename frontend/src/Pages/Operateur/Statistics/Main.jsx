import React, { useEffect, useState } from 'react'
import NoData from './NoData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWaterdata } from '../../../App/Slices/waterDataSlice';
import MonthlyWaterChart from './MonthlyWaterChart';
import { BiSolidFileExport } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { Link } from 'react-router-dom';
import PredictionBox from './PredictionBox';
import { SimulateWaterpredict } from '../../../App/Slices/waterpredictSlice';


const Main = () => {
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  const [day, setDay] = useState(today);
  const dispatch = useDispatch();

  const startOfMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;
  

  useEffect(() => {
    dispatch(fetchWaterdata({ start: startOfMonth, end: day }));
  }, [day, dispatch]);


  const { data, status, error } = useSelector(state => state.waterdata);






  const [openpredict, setOpenpredict] = useState(false);



  const AddIotWaterData = () => {
      dispatch(SimulateWaterpredict())
      setOpenpredict(true);
  }

  
  

  return (
    <div className='bg-white p-10 px-10 w-full rounded-md shadow-md min-h-screen'>
      <div className='flex items-center justify-between mb-18'>
        <h1 className='text-2xl font-bold opacity-50'> Water Monthly Data </h1>
        
        <div className='flex items-stretch gap-4'>
          <input
            type='date'
            value={day}
            max={today}
            onChange={(e) => setDay(e.target.value)}
            className='px-4 py-1 border cursor-pointer border-gray-900 rounded-md opacity-60 hover:opacity-100 transition-all'
          />
          
          <div className='flex items-stretch gap-2'>
            <button className='bg-blue-500 font-semibold cursor-pointer flex items-center space-x-2 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all'>
              <BiSolidFileExport size={20}/> 
              <span> Export Excel </span>
            </button>
            <button onClick={AddIotWaterData} className='bg-blue-500 font-semibold flex space-x-2 items-center cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all'>
              <BiSolidFileExport size={20}/> 
              <span> Get Water Data </span>
            </button>
          </div>
        </div>
      </div>

      <div className='px-2'>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' && data.length > 0 && <MonthlyWaterChart />}
        {status === 'succeeded' && data.length === 0 && <NoData />}
      </div>

      {openpredict && <PredictionBox setOpenpredict={setOpenpredict} />}
    </div>
  );
};



export default Main