import React from 'react';
import { useSelector } from 'react-redux';

function Table() {

    const {payload, prediction} = useSelector(state => state.waterpredict.data);

    const tableRows = [
        { title: "pH", description: "Acidity or basicity", value: payload.pH, status: payload.pH >= 6.5 && payload.pH <= 8.5 },
        { title: "Hardness", description: "Concentration of dissolved minerals", value: payload.Hardness, status: payload.Hardness <= 150 },
        { title: "Solids", description: "Suspended solids in water", value: payload.Solids, status: payload.Solids <= 1000 },
        { title: "Chloramines", description: "Disinfectants used in water", value: payload.Chloramines, status: payload.Chloramines <= 4 },
        { title: "Sulfate", description: "Presence of sulfate ions", value: payload.Sulfate, status: payload.Sulfate <= 250 },
        { title: "Conductivity", description: "Ionic content of water", value: payload.Conductivity, status: payload.Conductivity <= 800 },
        { title: "Organic Carbon", description: "Natural organic matter", value: payload.Organic_carbon, status: payload.Organic_carbon <= 4 },
        { title: "Trihalomethanes", description: "Byproducts of chlorination", value: payload.Trihalomethanes, status: payload.Trihalomethanes <= 80 },
        { title: "Turbidity", description: "Cloudiness of water", value: payload.Turbidity, status: payload.Turbidity <= 5 },
        { title: "Water Level", description: "Current tank level", value: payload.water_level, status: payload.water_level <= payload.tank_capacity }
    ];

    

  return (
    <div id="detailed-pricing" className="mt-8 flex flex-col h-[600px] rounded-md bg-white">
      {/* Header */}
      <div className="grid grid-cols-3 p-4 text-sm font-semibold text-gray-900 bg-gray-100  gap-x-8">
        <div>Parameter</div>
        <div>Value</div>
        <div>Status</div>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto flex-1">
        <div>
            {tableRows.map((row, index) => (
            <div
                key={index}
                className="grid grid-cols-3 px-4 py-3 border-b border-gray-200 text-sm text-gray-700 min-h-[56px] items-center gap-x-8"
            >
                <div className="text-gray-600">{row.description}</div>
                <div className="uppercase">{row.title} ({row.value})</div>
                <div>
                {row.status ? (
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917L5.724 10.5 15 1.5" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                )}
                </div>
            </div>
            ))}
        </div>
        <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">💡 Suggested Solutions</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {prediction?.treatments &&
                Object.entries(prediction.treatments).map(([key, value], index) => (
                    <li key={index}>
                    <span className="font-medium text-blue-600">{key}:</span> {value}
                    </li>
                ))}
            </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
      </div>
    </div>
  );
}

export default Table;
