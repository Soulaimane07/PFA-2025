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

const Notification2 = ({ type = 'info', data, setModalOpen }) => {
  const style = typeStyles[type] || typeStyles.info;

  const opacityClass = data?.read ? `opacity-60 bg-gray-200 border-none` : `opacity-100 ${style.bg} ${style.border}`;
  const textColorClass = data?.read ? 'text-gray-400 ' : style.text;

  return (
      <div 
        className={`flex cursor-pointer shadow shadow-4 shadow-transparent hover:shadow-gray-500 transition-all items-start gap-4 p-4 border-l-4 rounded-md ${opacityClass}`} 
        onClick={()=> setModalOpen(data)} // Open modal on click
      >
        <div className="flex-shrink-0 mt-1">{style.icon}</div>
        <div>
          <h4 className={`font-semibold text-lg ${textColorClass}`}>{data?.title}</h4>
          <p className={`text-sm mt-2 ${textColorClass}`}>{data?.message}</p>
          <p className={`text-xs mt-1 ${textColorClass}`}>{data?.date}</p>
          <p className={`text-xs mt-1 ${textColorClass}`}>From: {data?.userId}</p>
          <p className={`text-xs mt-1 ${textColorClass}`}>To: {data?.toUserId}</p>
        </div>
      </div>
  );
};

export default Notification2;
