import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Charts() {

    const charts = [
        {
            "title":"ِChart 1",
            "data": [
                { name: "Jan", sales: 4000 },
                { name: "Feb", sales: 3000 },
                { name: "Mar", sales: 5000 },
                { name: "Apr", sales: 2000 },
                { name: "May", sales: 6000 },
                { name: "Jun", sales: 7000 },
                { name: "Jul", sales: 8000 },
                { name: "Aug", sales: 9000 },
                { name: "Sep", sales: 10000 },
                { name: "Oct", sales: 11000 },
                { name: "Nov", sales: 12000 },
                { name: "Dec", sales: 13000 },
            ]
        },
        {
            "title":"ِChart 2",
            "data": [
                { name: "Jan", sales: 1000 },
                { name: "Feb", sales: 2000 },
                { name: "Mar", sales: 3000 },
                { name: "Apr", sales: 1000 },
                { name: "May", sales: 8000 },
                { name: "Jun", sales: 2000 },
                { name: "Jul", sales: 6000 },
                { name: "Aug", sales: 1000 },
                { name: "Sep", sales: 10000 },
                { name: "Oct", sales: 11000 },
                { name: "Nov", sales: 18000 },
                { name: "Dec", sales: 10000 },
            ]
        },
        {
            "title":"ِChart 3",
            "data": [
                { name: "Jan", sales: 4400 },
                { name: "Feb", sales: 3300 },
                { name: "Mar", sales: 5500 },
                { name: "Apr", sales: 2200 },
                { name: "May", sales: 6600 },
                { name: "Jun", sales: 7700 },
                { name: "Jul", sales: 8500 },
                { name: "Aug", sales: 9900 },
                { name: "Sep", sales: 11000 },
                { name: "Oct", sales: 12000 },
                { name: "Nov", sales: 13000 },
                { name: "Dec", sales: 14000 },
            ]
        },
    ]

    const [chartSelected, setChartSelected] = useState(charts[0])

  return (
    <div className=' bg-white p-4 px-5 w-full rounded-md shadow-md'>
        <div className='flex  space-x-2 mb-14'>
            {charts.map((chart, index) => (
                <button 
                    key={index} 
                    className={`'flex cursor-pointer hover:bg-blue-400 hover:text-white transition-all px-4 flex-col items-center justify-center p-2 rounded-md shadow-sm mt-2' ${chartSelected.title === chart.title ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-500'}`}
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