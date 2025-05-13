import React from 'react'
import {  PieChart, Pie, ResponsiveContainer } from "recharts";
import { data } from '../../../Components/Variables';

function PieChartComp() {
  return (
    <div>
      <div>
          {data.map((entry, index) => (
              <div key={index} className='flex items-center mb-4'>
                  <div className='w-3 h-3 rounded-full mr-2' style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}></div>
                  <span>{entry.name}: {entry.value}</span>
              </div>
          ))}
      </div>

      <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChartComp