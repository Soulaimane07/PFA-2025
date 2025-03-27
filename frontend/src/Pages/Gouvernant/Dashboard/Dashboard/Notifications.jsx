import React from 'react'

function Notifications() {

  const notifications = [
    {
      "title":"Notification 1",
      "description":1,
      "date":"2023-10-01"
    },
    {
      "title":"Notification 2",
      "description":2,
      "date":"2023-10-02"
    },
    {
      "title":"Notification 3",
      "description":3,
      "date":"2023-10-03"
    },
    {
      "title":"Notification 1",
      "description":1,
      "date":"2023-10-01"
    },
    {
      "title":"Notification 2",
      "description":1,
      "date":"2023-10-02"
    },
    {
      "title":"Notification 3",
      "description":3,
      "date":"2023-10-03"
    },
  ]


  const NotifSkeleton = ({style}) => (
    <div className={` rounded-md px-2 ${style}`}>
      Important
    </div>
  )


  return (
    <div className='Notifications bg-white  p-4 px-5  rounded-md shadow-md'>
        <h1 className='text-lg font-bold opacity-50 mb-4'> Notifications ({notifications?.length}) </h1>
        <div>
          {notifications.map((notification, index) => (
            <div key={index} className='mt-2 flex justify-between hover:bg-gray-200 px-2 py-2.5  rounded-md'>
              <h2 className='text-sm font-semibold opacity-50  '>{notification.title}</h2>
              <p className='text-sm '>
                {notification.description==1 && <NotifSkeleton style="text-red-600 bg-red-200" />}
                {notification.description==2 && < NotifSkeleton style='text-blue-600 bg-blue-200' />}
                {notification.description==3 && <  NotifSkeleton style='text-green-600 bg-green-200' />}
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Notifications