import React from 'react'

function SubmitButton({text}) {
  return (
    <button
      type="submit"
      className="mt-6 w-full py-3 cursor-pointer bg-orange-400 hover:bg-orange-500 transition-all text-white font-medium text-md rounded-md"
    >
      {text}
    </button>
  )
}

export default SubmitButton