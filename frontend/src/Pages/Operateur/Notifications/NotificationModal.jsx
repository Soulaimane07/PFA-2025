import axios from 'axios';
import React, { useEffect } from 'react';
import { backendURL } from '../../../Components/Variables';
import { fetchNotifications } from '../../../App/Slices/notificationsSlice';
import { useDispatch } from 'react-redux';

const NotificationModal = ({ notification, setModalOpen, userId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (
          notification &&
          !notification.read &&
          notification.toUserId === userId // Only mark as read if this user is the recipient
        ) {
          const markAsRead = async () => {
            try {
              const response = await axios.put(`${backendURL}/notifications/read/${notification._id}`);
              if (response.status === 200) {
                console.log('Notification marked as read');
                dispatch(fetchNotifications(userId));
              }
            } catch (error) {
              console.error('Error marking notification as read:', error);
            }
          };
      
          markAsRead();
        }
      }, [notification, userId]);
      
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Notification Details</h3>
          <button onClick={() => setModalOpen(null)} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Title:</h4>
          <p>{notification?.title}</p>
          
          <h4 className="text-lg font-bold">Message:</h4>
          <p>{notification?.message}</p>
          
          <h4 className="text-lg font-bold">Date:</h4>
          <p>{notification?.date}</p>
          
          <h4 className="text-lg font-bold">To User:</h4>
          <p>{notification?.toUserId}</p>
          
          <h4 className="text-lg font-bold">Status:</h4>
          <p>{notification?.read ? 'Read' : 'Unread'}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
