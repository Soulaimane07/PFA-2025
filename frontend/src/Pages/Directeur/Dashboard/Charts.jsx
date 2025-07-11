import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BarchartData } from '../../../Components/Variables';
import { GetChartsData } from '../../../Components/Functions';

function Charts() {
    let data = GetChartsData()
    // console.log(data);


    const [chartSelected, setChartSelected] = useState(BarchartData[0])

  return (
    <div className=' bg-white p-4 px-5 w-full rounded-md shadow-md'>
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
  )
}

export default Charts