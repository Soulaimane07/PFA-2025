import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { backendURL } from '../../../../Components/Variables';
import { useDispatch } from 'react-redux';
import { fetchRegion } from '../../../../App/Slices/regionSlice';
import { fetchCity } from '../../../../App/Slices/citySlice';
import { fetchRegions } from '../../../../App/Slices/regionsSlice';
import SubmitButton from '../../../../Components/Buttons/SubmitButton';
import { fetchCities } from '../../../../App/Slices/citiesSlice';
import { fetchFactories } from '../../../../App/Slices/factoriesSlice';


function CreateFactory({ setOpenCreate, region, city, factory }) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    // If an factory is passed (for update), set the name
    useEffect(() => {
        if (factory) {
            setName(factory.name);
        }
    }, [factory]);

    const CreateOrUpdateFactoryFun = (e) => {
        e.preventDefault();

        const factoryData = { name, regionId: region._id, cityId: city._id };

        if (factory) {
            // If updating an existing factory, use PUT request
            axios.put(`${backendURL}/factories/${factory._id}`, factoryData)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(fetchRegions());
                        dispatch(fetchRegion(region._id));
                        dispatch(fetchCity(city._id));
                        dispatch(fetchCities());
                        dispatch(fetchFactories());
                        
                        setOpenCreate(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            // If creating a new factory, use POST request
            axios.post(`${backendURL}/factories`, factoryData)
                .then((res) => {
                    if (res.status === 201) {
                        dispatch(fetchRegions());
                        dispatch(fetchRegion(region._id));
                        dispatch(fetchCity(city._id));
                        dispatch(fetchCities());
                        dispatch(fetchFactories());
                        
                        setOpenCreate(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center'>
            <div className='bg-white p-5 rounded-md shadow-md w-1/3 min-h-80 py-6'>
                <div className='flex items-center justify-between mb-4 px-4'>
                    <h1 className='text-2xl font-bold'>{factory ? 'Update Factory' : 'Create Factory'}</h1>
                    <button onClick={() => setOpenCreate(false)} className='text-gray-500 cursor-pointer hover:text-gray-700'>
                        <MdOutlineClose size={26} />
                    </button>
                </div>

                <form onSubmit={CreateOrUpdateFactoryFun} className='space-y-4 px-5'>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="region" className='text-gray-600'>Region</label>
                        <input type="text" disabled value={region?.name} className='w-full bg-gray-200/80 text-gray-700 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
                    </div>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="city" className='text-gray-600'>City</label>
                        <input type="text" disabled value={city?.name} className='w-full bg-gray-200/80 text-gray-700 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
                    </div>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="name" className='text-gray-600'>Factory Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            value={name}
                            placeholder='Enter Factory Name'
                            className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500'
                            required
                        />
                    </div>

                    <SubmitButton text={factory ? 'Update Factory' : 'Create Factory'} />
                </form>
            </div>
        </div>
    );
}

export default CreateFactory;
