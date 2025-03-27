import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const LoginFun = (e) => {
    e.preventDefault();

    navigate("/dashboard")
  }


  
  return (
    <div className='flex  '>
      <div className=' py-10 h-screen w-full px-40 '>
        <img src="logo.jpeg" alt="" className='w-60' />
        <h1 className='text-center text-3xl font-medium mt-10 mb-6'>Login to your account</h1>
        <h3 className='text-center'>where the is water there is life </h3>

        <form onSubmit={LoginFun} className=' py-2 mt-6 px-20 space-y-4' >
          <div>
            <label htmlFor="">Username</label>
            <input 
              type="text" 
              id="default-input" 
              placeholder='username'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor=""> Password </label>
            <input
              type="password"
              placeholder='password'
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
            <div className='w-full flex'>

            <button className='text-sm text-white bg-blue-500 w-1/2 m-auto p-3 rounded-md font-medium mt-6 '>Login</button>
            </div>
            
          </div>
        </form>
      </div>
      <div className=' h-screen w-full loginimage'>
      </div>
    </div>
  )
}

export default Login