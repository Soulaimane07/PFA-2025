import React, { useState, useEffect } from 'react';

function Weater() {
    const [time, setTime] = useState(new Date());
    const [temperature, setTemperature] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState('');

    useEffect(() => {
        // Update time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);


    const hour = time.getHours();
    const minutes = time.getMinutes();
    const day = time.toLocaleDateString('en-US', { weekday: 'long' });
    const date = time.getDate();
    const month = time.getMonth() + 1; // Months are zero-based
    const year = time.getFullYear();

    return (
        <div className='bg-white flex items-center justify-center shadow-md rounded-md py-2 px-5 space-x-10'>
            <div className='flex flex-col items-left'>
                <div className='space-x-1 flex items-left justify-left text-lg font-bold'>
                    <p>
                        {hour} : {minutes < 10 ? `0${minutes}` : minutes}
                    </p>
                    <p>
                        {hour >= 12 ? 'PM' : 'AM'}
                    </p>
                </div>

                <div className='font-light text-xs text-gray-400'>
                    {day} {date}/{month}/{year}
                </div>

                {temperature !== null && (
                    <div className='font-medium text-sm text-gray-600 mt-2'>
                        {weatherDescription}, {temperature}°C
                    </div>
                )}
            </div>
            <img src="/cloudy.png" alt="" className='w-10' />
        </div>
    );
}

export default Weater;