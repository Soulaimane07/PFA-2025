import React, { useState } from 'react'
import { BarchartData, data } from '../../../Components/Variables'
import {  PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import PieChartComp from './PieChartComp';
import Chart3 from './Chart3';


function Main() {
    const [chartSelected, setChartSelected] = useState(BarchartData[0])
    
  return (
    <div className='bg-white p-4 px-5 w-full  rounded-md shadow-md min-h-screen'>
        <h1 className='text-2xl font-bold opacity-50 mb-8'> Statistics </h1>



        <div>
            <div className='flex w-fit  mb-14 rounded-md overflow-hidden'>
                {BarchartData.map((chart, index) => (
                    <button 
                        key={index} 
                        className={`cursor-pointer hover:bg-blue-100 hover:text-blue-700 hover:opacity-100 transition-all px-4 p-1.5  ' ${chartSelected.title === chart.title ? 'bg-blue-100 text-blue-700 opacity-100' : 'bg-gray-00 opacity-70 text-gray-500'}`}
                        onClick={() => setChartSelected(chart)}
                    >
                        {chart.title}
                    </button>
                ))}
            </div>

            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartSelected.data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div>
            {data.map((entry, index) => (
                <div key={index} className='flex items-center mb-4'>
                    <div className='w-3 h-3 rounded-full mr-2' style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}></div>
                    <span>{entry.name}: {entry.value}</span>
                </div>
            ))}
        </div>

        <PieChartComp />
        <Chart3 />
    </div>
  )
}

export default Main