import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { backendURL } from '../../../Components/Variables';
import { fetchNotifications } from '../../../App/Slices/notificationsSlice';
import SubmitButton from '../../../Components/Buttons/SubmitButton';

function CreateNotification({ setOpenCreate }) {
    const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');                     
  const [importance, setImportance] = useState(null);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('aiwater-user'))

        const newNotification = {
            title,
            description,
            importance,
            userId: user._id
        };

        axios.post(`${backendURL}/notifications`, newNotification)
            .then((res) => {
                if (res.status === 201) {
                    dispatch(fetchNotifications());
                    setOpenCreate(false);
                }
            })
            .catch((err) => {
                console.error(err);
                setOpenCreate(false);
            });
    };
  

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
              placeholder="Enter device title"
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
            <label className="text-gray-600"> Importance </label>
            <select onChange={(e)=> setImportance(e.target.value)}>
                {/* <option key={key} value={item._id}> {item.name} </option>
                <option key={key} value={item._id}> {item.name} </option>
                <option key={key} value={item._id}> {item.name} </option> */}
            </select>
          </div>

          <SubmitButton text="Create Notification" />
        </form>
      </div>
    </div>
  );
}

export default CreateNotification;
