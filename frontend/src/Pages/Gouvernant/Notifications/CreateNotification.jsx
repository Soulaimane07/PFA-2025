import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { backendURL } from '../../../Components/Variables';
import { fetchNotifications } from '../../../App/Slices/notificationsSlice';
import SubmitButton from '../../../Components/Buttons/SubmitButton';

function CreateNotification({ setOpenCreate }) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [toUserId, setToUserId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('aiwater-user'));

        const newNotification = {
            title,
            message, // Mapping message to message field
            type: type,      // Using 'type' as schema defines
            userId: user._id,
            toUserId
        };

        axios.post(`${backendURL}/notifications`, newNotification)
            .then((res) => {
                if (res.status === 201) {
                    dispatch(fetchNotifications(user._id)); // Refresh notifications
                    setOpenCreate(false); // Close modal
                }
            })
            .catch((err) => {
                console.error(err);
                setOpenCreate(false); // Close modal even on error
            });
    };


    const accounts = useSelector((state)=> state.accounts.data)

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
            <div className="bg-white p-5 rounded-md shadow-md w-1/3 min-h-80 py-6">
                <div className="flex items-center justify-between mb-4 px-4">
                    <h1 className="text-2xl font-bold">Create Notification</h1>
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
                            placeholder="Enter notification title"
                            className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
                            required
                        />
                    </div>

                    <div className="space-y-1 flex flex-col">
                        <label className="text-gray-600">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter message"
                            className="w-full bg-gray-200/80 border-0 px-4 py-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="space-y-1 flex flex-col">
                        <label className="text-gray-600">Type</label>
                        <select
                            onChange={(e) => setType(e.target.value)}
                            value={type}
                            required
                            className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
                        >
                            <option value="">Select type</option>
                            <option value="success">Success</option>
                            <option value="error">Error</option>
                            <option value="info">Info</option>
                            <option value="warning">Warning</option>
                            <option value="update">Update</option>
                            <option value="system">System</option>
                        </select>
                    </div>
                    
                    <div className="space-y-1 flex flex-col">
                        <label className="text-gray-600">To user</label>
                        <select
                            onChange={(e) => setToUserId(e.target.value)}
                            value={toUserId}
                            required
                            className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md"
                        >
                            <option value="">Select type</option>
                            {accounts?.map((item,key)=>(
                              <option value={item._id} key={key}> {item.email} </option>
                            ))}
                        </select>
                    </div>

                    <SubmitButton text="Create Notification" />
                </form>
            </div>
        </div>
    );
}

export default CreateNotification;
