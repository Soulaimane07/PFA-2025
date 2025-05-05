import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning
} from 'react-icons/ai';

const typeStyles = {
  success: {
    bg: 'bg-green-100',
    border: 'border-green-400',
    text: 'text-green-700',
    icon: <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />
  },
  error: {
    bg: 'bg-red-100',
    border: 'border-red-400',
    text: 'text-red-700',
    icon: <AiOutlineCloseCircle className="w-6 h-6 text-red-500" />
  },
  info: {
    bg: 'bg-blue-100',
    border: 'border-blue-400',
    text: 'text-blue-700',
    icon: <AiOutlineInfoCircle className="w-6 h-6 text-blue-500" />
  },
  warning: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-400',
    text: 'text-yellow-700',
    icon: <AiOutlineWarning className="w-6 h-6 text-yellow-500" />
  }
};

const Notification3 = ({ type = 'info', data, setModalOpen }) => {
  const style = typeStyles[type] || typeStyles.info;

  const opacityClass = data?.read ? `opacity-60 bg-gray-200 border-none` : `opacity-100 ${style.bg} ${style.border}`;
  const textColorClass = data?.read ? 'text-gray-400 ' : style.text;

  return (
      <div 
        className={`cursor-pointer shadow shadow-4 shadow-transparent hover:shadow-gray-400 transition-all p-3 mb-2 border-l-4 rounded-sm   ${opacityClass}`} 
        onClick={()=> setModalOpen(data)} // Open modal on click
      >
          <h4 className={`font-semibold text-md ${textColorClass}`}>{data?.title}</h4>
          <p className={`text-xs mt-1 ${textColorClass}`}>To: {data?.toUserId}</p>
      </div>
  );
};

export default Notification3;
