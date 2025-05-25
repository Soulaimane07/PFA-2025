import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useSelector } from 'react-redux';
import Table from './Table';
// import { Loader2, Sparkles } from 'lucide-react';

function PredictionBox({setOpenpredict}) {
    const water = useSelector(state => state.waterpredict);

  return (
    <div className="fixed top-0 left-0 py-20 w-full h-full bg-black/20 flex items-center justify-center">
        <div className="bg-white p-5 rounded-md shadow-md w-2/4 min-h-80 py-6">
            <div className="flex items-center justify-between mb-4 px-4">
              <h1 className="text-2xl font-bold"> Water Prediction </h1>
              <button
                onClick={() => setOpenpredict(false)}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
              >
                <MdOutlineClose size={26} />
              </button>
            </div>

           <div className="h-[600px] flex flex-col items-center justify-center px-6">
                {water.status === "loading" ? (
                    <div role="status" className="animate-pulse text-center space-y-6">
                        <div className="flex flex-col items-center space-y-2">
                            <h1 className="text-3xl font-bold text-gray-800">Processing with AI</h1>
                            <p className="text-lg text-gray-600">Please wait a moment...</p>
                        </div>
                        <div className="w-12 h-12 border-4 border-dashed rounded-full border-blue-400 mt-16 animate-ping mx-auto">
                        </div>
                    </div>
                ) : water.status === "succeeded" ? (
                    <Table />
                ) : null}
            </div>
        </div>
    </div>

  )
}

export default PredictionBox