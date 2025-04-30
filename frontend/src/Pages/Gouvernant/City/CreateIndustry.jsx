import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { backendURL } from '../../../Components/Variables';
import { useDispatch } from 'react-redux';
import { fetchRegion } from '../../../App/Slices/regionSlice';
import { fetchCity } from '../../../App/Slices/citySlice';
import { fetchRegions } from '../../../App/Slices/regionsSlice';

function CreateIndustry({ setOpenCreate, region, city, industry }) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    // If an industry is passed (for update), set the name
    useEffect(() => {
        if (industry) {
            setName(industry.name);
        }
    }, [industry]);

    const CreateOrUpdateIndustryFun = (e) => {
        e.preventDefault();

        const industryData = { name, regionId: region._id, cityId: city._id };

        if (industry) {
            // If updating an existing industry, use PUT request
            axios.put(`${backendURL}/industries/${industry._id}`, industryData)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(fetchRegions());
                        dispatch(fetchRegion(region._id));
                        dispatch(fetchCity(city._id));
                        setOpenCreate(false);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            // If creating a new industry, use POST request
            axios.post(`${backendURL}/industries`, industryData)
                .then((res) => {
                    if (res.status === 201) {
                        dispatch(fetchRegions());
                        dispatch(fetchRegion(region._id));
                        dispatch(fetchCity(city._id));
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
                    <h1 className='text-2xl font-bold'>{industry ? 'Update Industry' : 'Create Industry'}</h1>
                    <button onClick={() => setOpenCreate(false)} className='text-gray-500 cursor-pointer hover:text-gray-700'>
                        <MdOutlineClose size={26} />
                    </button>
                </div>

                <form onSubmit={CreateOrUpdateIndustryFun} className='space-y-4 px-5'>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="region" className='text-gray-600'>Region</label>
                        <input type="text" disabled value={region?.name} className='w-full bg-gray-200/80 text-gray-700 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
                    </div>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="city" className='text-gray-600'>City</label>
                        <input type="text" disabled value={city?.name} className='w-full bg-gray-200/80 text-gray-700 border-0 h-12 px-4 rounded-md placeholder:text-gray-500' required />
                    </div>
                    <div className='space-y-1 flex flex-col'>
                        <label htmlFor="name" className='text-gray-600'>Industry Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            value={name}
                            placeholder='Enter Industry Name'
                            className='w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500'
                            required
                        />
                    </div>

                    <button type="submit" className='w-full h-12 cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-medium text-lg rounded-md'>
                        {industry ? 'Update Industry' : 'Create Industry'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateIndustry;
