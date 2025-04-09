import React from 'react'
import {  PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { data } from '../../../Components/Variables';

function PieChartComp() {
  return (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PieChartComp