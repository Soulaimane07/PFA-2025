import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Notification3 from '../../../Components/Notification/Notification3';
import NotificationModal from "../Notifications/NotificationModal"

function Notifications() {
  const notifications = useSelector(state => state.notifications.data)
  const unreadNotifications = notifications?.filter(n => !n.read);

  const [modalOpen, setModalOpen] = useState(null); // State to control modal visibility
  const user = JSON.parse(localStorage.getItem('aiwater-user'))


  return (
    <div className='Notifications bg-white  p-4 px-5  rounded-md shadow-md'>
        <h1 className='text-lg font-bold opacity-50 mb-4'> New Notifications ({unreadNotifications?.length}) </h1>
        <div>
          {unreadNotifications?.map((notification, key) => (
            <Notification3 data={notification} type={notification.type} key={key} setModalOpen={setModalOpen} />
          ))}
        </div>

        {modalOpen && <NotificationModal notification={modalOpen} setModalOpen={setModalOpen} userId={user._id} />}
    </div>
  )
}

export default Notifications