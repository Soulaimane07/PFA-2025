import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { IoNotificationsOutline as Bell } from "react-icons/io5";
import { FaChevronDown as ChevronDown } from "react-icons/fa";
import { FaSearch as Search } from "react-icons/fa";

function Devices() {
  const [searchQuery, setSearchQuery] = useState("");

  const devices = Array(8).fill({
    image: "https://via.placeholder.com/300/333333",
    description: "Marque substitutive, remplaçant, élément générique ou de substitution.",
    quantity: 20,
  });

  return (
    <div className="bg-gray-50 flex">
      <Navbar />

      <main className="flex-1 px-10 py-4">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-gray-700">
              <div className="text-lg font-medium">8:00 AM</div>
              <div className="text-xs text-gray-500">Sun 12 March, 2023</div>
            </div>
            <div className="ml-8 flex items-center">
              <span className="text-2xl font-medium">12°C</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="relative p-2 mr-4">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="mr-2">Fatimaezzahra-Operateur ndistruel</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium text-gray-700">Devices (8)</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Create device</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <div key={index} className="device-card">
                <div className="h-40 bg-gray-200">
                  <img src={device.image} alt="Device" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="font-medium">Description: </span>
                    <span>{device.description}</span>
                  </div>
                  <div>
                    <span className="font-medium">Quantity: </span>
                    <span>{device.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </main>
    </div>
  );
}

export default Devices;
