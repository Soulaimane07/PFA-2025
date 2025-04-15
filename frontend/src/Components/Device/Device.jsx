import React from 'react'

function Device({data}) {
  return (
    <div className="device-card">
        <div className="h-40 bg-gray-200">
            <img src={data.image} alt="Device" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
            <div className="mb-2">
                <span className="font-medium">Description: </span>
                <span>{data.description}</span>
            </div>
            <div>
                <span className="font-medium">Quantity: </span>
                <span>{data.quantity}</span>
            </div>
        </div>
    </div>
  )
}

export default Device