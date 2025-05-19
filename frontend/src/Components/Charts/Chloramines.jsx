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

function Chloramines({data}) {
  return (
    <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Line
            type="monotone"
            dataKey="Chloramines"
            stroke="#9c27b0"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            />
        </LineChart>
    </ResponsiveContainer>
  )
}

export default Chloramines