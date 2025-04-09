import React from "react"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/login', {email, password})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-white">
    
        {/* Left side - Login Form */}
        <div className="w-full md:w-2/3 flex flex-col justify-center px-8 md:px-12 py-12">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">Login to your Account</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your Password here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-200/80 border-0 h-12 px-4 rounded-md placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium text-lg rounded-md"
              >
                Login to Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                you don't have an account?
                <a href="/register" className="text-blue-500 ml-1 hover:underline">
                  Register
                </a>
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-md h-12 hover:bg-gray-50"
                onClick={() => console.log("Google sign in")}
              >
                <img src="/google-icon.svg" alt="Google" width={20} height={20} />
                <span>Sign up with Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-md h-12 hover:bg-gray-50"
                onClick={() => console.log("GitHub sign in")}
              >
                <img src="/github-icon.svg" alt="GitHub" width={20} height={20} />
                <span>Sign up with GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:block md:w-1/3 bg-slate-300 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[80%] h-[80%] bg-white rounded-full opacity-80 blur-md top-[10%] left-[10%]"></div>
          <div className="absolute w-[70%] h-[70%] bg-white rounded-full opacity-60 blur-md -top-[10%] -left-[10%]"></div>
          <div className="absolute w-[60%] h-[60%] bg-white rounded-full opacity-70 blur-md bottom-[5%] right-[5%]"></div>
          <div className="relative w-fill  aspect-square pt-32">
            <img
              src="../../Logo_solo.png"
              alt="Login illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      </div>
  
  )
}

