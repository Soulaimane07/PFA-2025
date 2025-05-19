import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Solids({data}) {
  return (
    <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[400, 1600]} />
            <Tooltip />
            <Legend />
            <Line
            type="monotone"
            dataKey="Solids"
            stroke="#ff9800"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            />
        </LineChart>
    </ResponsiveContainer>
  )
}

export default Solids