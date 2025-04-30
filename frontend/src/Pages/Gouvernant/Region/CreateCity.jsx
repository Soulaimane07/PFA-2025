import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { backendURL } from '../../../Components/Variables';
import { useDispatch } from 'react-redux';
import { fetchRegion } from '../../../App/Slices/regionSlice';
import { fetchRegions } from '../../../App/Slices/regionsSlice';

function CreateCity({ setOpenCreate, region, city = null }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    if (city) {
      setName(city.name);
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { name, regionId: region._id };

    const request = city
      ? axios.put(`${backendURL}/cities/${city._id}`, payload)
      : axios.post(`${backendURL}/cities`, payload);

    request
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setOpenCreate(false);
          dispatch(fetchRegion(region._id));
          dispatch(fetchRegions());
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-1/3 min-h-80 py-6">
        <div className="flex items-center justify-between mb-4 px-4">
          <h1 className="text-2xl font-bold">{city ? 'Update City' : 'Create City'}</h1>
          <button
            onClick={() => setOpenCreate(false)}
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          >
            <MdOutlineClose size={26} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Region</label>
            <input
              type="text"
              disabled
              value={region?.name}
              className="w-full bg-gray-200/80 text-gray-700 border-0 h-12 px-4 rounded-md"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Enter City Name"
              className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium text-lg rounded-md"
          >
            {city ? 'Update City' : 'Create City'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCity;
