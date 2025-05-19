import React, { useState } from 'react'
import PH from '../../../Components/Charts/PH';
import { useSelector } from 'react-redux';
import Hardness from '../../../Components/Charts/Hardness';
import Solids from '../../../Components/Charts/Solids';
import Chloramines from '../../../Components/Charts/Chloramines';
import Sulfate from '../../../Components/Charts/Sulfate';
import Conductivity from '../../../Components/Charts/Conductivity';

function groupDataByDay(data) {
  const dailyMap = {};

  data.forEach((item) => {
    // Extract date part only (YYYY-MM-DD)
    const dayKey = item.timestamp.slice(0, 10);

    if (!dailyMap[dayKey]) {
      dailyMap[dayKey] = {
        date: dayKey,
        count: 0,
        pH: 0,
        Hardness: 0,
        Solids: 0,
        Chloramines: 0,
        Sulfate: 0,
        Conductivity: 0,
        // add other metrics if needed
      };
    }

    dailyMap[dayKey].count++;
    dailyMap[dayKey].pH += item.pH;
    dailyMap[dayKey].Hardness += item.Hardness;
    dailyMap[dayKey].Solids += item.Solids;
    dailyMap[dayKey].Chloramines += item.Chloramines;
    dailyMap[dayKey].Sulfate += item.Sulfate;
    dailyMap[dayKey].Conductivity += item.Conductivity;
  });

  // Calculate averages per day
  return Object.values(dailyMap).map((day) => {
    const avg = {};
    Object.keys(day).forEach((key) => {
      if (key !== "date" && key !== "count") {
        avg[key] = +(day[key] / day.count).toFixed(2);
      }
    });

    return {
      // Format date for display on x-axis, e.g. "19 May"
      date: new Date(day.date).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
      }),
      ...avg,
    };
  });
}

function Charts() {
    const rawData = useSelector((state) => state.waterdata.data);
    const data = groupDataByDay(rawData);

    const [chartSelected, setChartSelected] = useState(0)


    const charts = [
        {
            "title": "pH",
            "component": <PH data={data} />
        },
        {
            "title": "Hardness",
            "component": <Hardness data={data} />
        },
        {
            "title": "Solids",
            "component": <Solids data={data} />
        },
        {
            "title": "Chloramines",
            "component": <Chloramines data={data} />
        },
        {
            "title": "Sulfate",
            "component": <Sulfate data={data} />
        },
        {
            "title": "Conductivity",
            "component": <Conductivity data={data} />
        }
    ]

  return (
    <div className=' bg-white p-4 px-5 w-full rounded-md shadow-md'>
        <div className='flex w-fit  mb-14 rounded-md overflow-hidden bg-gray-100/50'>
            {charts.map((chart, index) => (
                <button 
                    key={index} 
                    className={`cursor-pointer hover:bg-blue-100 hover:text-blue-700 px-6 py-2 hover:opacity-100 transition-all   ' ${chartSelected === index ? 'bg-blue-100 text-blue-700 opacity-100' : 'bg-gray-00 opacity-70 text-gray-500'}`}
                    onClick={() => setChartSelected(index)}
                >
                    {chart.title}
                </button>
            ))}
        </div>

        <div className='pr-6'>
            {charts[chartSelected].component}
        </div>
    </div>
  )
}

export default Charts