import React, { useState } from 'react'
import { BarchartData } from '../../../Components/Variables'
import {  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";


function Chart1() {
    const [chartSelected, setChartSelected] = useState(BarchartData[0])

  return (
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
  )
}

export default Chart1