import React, { useState } from 'react'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="w-1/2 h-full bg-indigo-600"></div>
            <div className="w-1/2 h-full flex items-center justify-center px-32">
                <form className='w-full' autoComplete='OFF'>
                    <h1 className='font-semibold text-4xl'>Log In</h1>
                    <div className='my-8'>
                        <label htmlFor={'email'} className="font-medium">Email address</label>
                        <div className='flex items-center p-4 border border-gray-300 rounded-xl mt-2'>
                            <i className="text-gray-500 text-lg pr-3 ri-mail-line"></i>
                            <input id="email" type='email' className='w-full text-sm outline-none' placeholder={'test@gmail.com'} onChange={() => { }} />
                        </div>
                    </div>
                    <div className='my-8'>
                        <label htmlFor={'password'} className="font-medium">Password</label>
                        <div className='flex items-center p-4 border border-gray-300 rounded-xl mt-2'>
                            <i className="text-gray-500 text-lg pr-3 ri-lock-line"></i>
                            <input id="password" type={showPassword ? 'text' : 'password'} className='w-full text-sm outline-none' placeholder="••••••••••" onChange={() => { }} />
                            <i onClick={() => setShowPassword(!showPassword)} className={`cursor-pointer hover:text-gray-600 transition duration-400 text-gray-500 text-lg pr-3 ${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}`}></i>
                        </div>
                    </div>
                    <button type='button' className='focus:ring ring-indigo-500 flex w-full justify-center text-sm items-center p-5 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-500  rounded-xl mt-2'>
                        Sign In
                    </button>
                    <span className='text-sm mt-3 inline-block'>Don't have an account? <a href="" className='text-indigo-600 font-semibold'>Sign up</a></span>
                    <div className='flex items-center justify-center mt-4 text-gray-500'>
                        <hr className='w-full mr-3' />
                        Or
                        <hr className='w-full ml-3' />
                    </div>
                    <button className='flex w-full gap-5 justify-center text-sm items-center p-4  transition duration-400 border border-gray-300 font-medium hover:shadow-md rounded-xl mt-8'>
                        <img src="./assets/google.png" className='w-8' alt="image" />    Log in with google
                    </button>
                </form>
            </div>
        </div>
    )
}
