import React, { useState } from 'react'
import { BarchartData, data } from '../../../Components/Variables'
import PieChartComp from './PieChartComp';
import Chart3 from './Chart3';
import Chart1 from './Chart1';


function Main() {
    
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen'>
        <h1 className='text-2xl font-bold opacity-50 mb-8'> Statistics </h1>



        <div className='px-10'>
            <Chart1 />
            

            

            <PieChartComp />
            <Chart3 />
        </div>

    </div>
  )
}

export default Main