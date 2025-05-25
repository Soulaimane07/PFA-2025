import React from "react";
import { useSelector } from 'react-redux'
import PH from "../../../Components/Charts/PH";
import Hardness from "../../../Components/Charts/Hardness";
import Conductivity from "../../../Components/Charts/Conductivity";
import Sulfate from "../../../Components/Charts/Sulfate";
import Chloramines from "../../../Components/Charts/Chloramines";
import Solids from "../../../Components/Charts/Solids";


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

export default function MonthlyWaterChart() {
    // const data = useSelector((state) => state.waterdata.data);
    const rawData = useSelector((state) => state.waterdata.data);
    const data = groupDataByDay(rawData);

  return (
    <div className="pb-20">
        {/* <h1 className="text- text-2xl font-bold mb-14">
            
        </h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chart 1: pH */}
        <div className="border border-gray-200 px-6 py-2 pl-1 rounded-md shadow-md" >
            <h3 className="text-center font-medium mb-6">pH Level</h3>
            <PH data={data} />
        </div>

        {/* Chart 2: Hardness */}
        <div className="border border-gray-200 px-6 py-2 pl-1 rounded-md shadow-md">
            <h3 className="text-center font-medium mb-6">Water Hardness (mg/L)</h3>
            <Hardness data={data} />
        </div>

        {/* Chart 3: Solids */}
        <div className="border border-gray-200 px-6 py-2 pl-1 rounded-md shadow-md mt-10">
            <h3 className="text-center font-medium mb-6">Total Solids (mg/L)</h3>
            <Solids data={data} />
        </div>

        {/* Chart 4: Chloramines */}
        <div className="border border-gray-200 px-6 py-2 pl-0 rounded-md shadow-md mt-10">
            <h3 className="text-center font-medium mb-6">Chloramines (mg/L)</h3>
            <Chloramines data={data} />
        </div>

        {/* Chart: Sulfate */}
        <div className="border border-gray-200 px-6 py-2 pl-0 rounded-md shadow-md mt-10">
            <h3 className="text-center font-medium mb-6">Sulfate (mg/L)</h3>
            <Sulfate data={data} />
        </div>

        {/* Chart: Conductivity */}
        <div className="border border-gray-200 px-6 py-2 pl-0 rounded-md shadow-md mt-10">
            <h3 className="text-center font-medium mb-6">Conductivity (µS/cm)</h3>
            <Conductivity data={data} />
        </div>
      </div>
    </div>
  );
}
