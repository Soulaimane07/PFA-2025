import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { backendURL } from '../../../Components/Variables';
import SubmitButton from '../../../Components/Buttons/SubmitButton';
import { fetchDevices } from '../../../App/Slices/devicesSlice';
import { fetchRegions } from '../../../App/Slices/regionsSlice';

function CreateDevice({ setOpenCreate, device }) {
  const dispatch = useDispatch()


  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');                     
  const [regionId, setRegionId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [factoryId, setFactoryId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDevice = {
      title,
      image,
      description,
      factoryId,
      regionId,
      cityId,
    };

    const request = device
      ? axios.put(`${backendURL}/devices/${device._id}`, newDevice)
      : axios.post(`${backendURL}/devices`, newDevice);

    request
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setOpenCreate(false);
          dispatch(fetchDevices());
          dispatch(fetchRegions());
        }
      })
      .catch((err) => {
        console.error(err);
        setOpenCreate(false);
      });

  };



  const regions = useSelector((state)=> state.regions.data)
  const cities = useSelector(state => state.cities.data)
  const factories = useSelector(state => state.factories.data)
  


  


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-1/3 min-h-80 py-6">
        <div className="flex items-center justify-between mb-4 px-4">
          <h1 className="text-2xl font-bold">Create Device</h1>
          <button
            onClick={() => setOpenCreate(false)}
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          >
            <MdOutlineClose size={26} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter device title"
              className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full bg-gray-200/80 border-0 px-4 py-2 rounded-md"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Region</label>
            <select onChange={(e)=> setRegionId(e.target.value)} className='bg-gray-200/80 w-full  border-0 h-12 px-4 rounded-md'>
              <option value={null}>Select region</option>
              {regions?.map((item,key)=> (
                <option key={key} value={item._id}> {item.name} </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">City</label>
            <select disabled={regionId === null} className={`${regionId === null ? " opacity-60" : "opacity-100"} bg-gray-200/80 w-full  border-0 h-12 px-4 rounded-md`} onChange={(e)=> setCityId(e.target.value)}>
              <option value={null}>Select City</option>
              {cities?.map((item,key)=> (
                item.regionId === regionId &&
                  <option key={key} value={item._id}> {item.name} </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-gray-600">Factory</label>
            <select disabled={cityId === null} className={`${cityId === null ? " opacity-60" : "opacity-100"} bg-gray-200/80 w-full  border-0 h-12 px-4 rounded-md`} onChange={(e)=> setFactoryId(e.target.value)}>
              <option value={null}>Select Factory</option>
              {factories?.map((item,key)=> (
                item.cityId === cityId &&
                  <option key={key} value={item._id}> {item.name} </option>
              ))}
            </select>
          </div>

          <SubmitButton text="Create Device" />
        </form>
      </div>
    </div>
  );
}

export default CreateDevice;
