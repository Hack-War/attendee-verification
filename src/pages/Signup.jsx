import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState()
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="w-1/2 h-full bg-indigo-600 flex items-center justify-center relative">
                <a href='/' className='absolute top-20 left-20 text-white font-bold text-3xl'>etter•</a>
                <img className='w-96' src='./assets/auth-illu.svg' alt='image' /></div>
            <div className="w-1/2 h-full flex items-center justify-center px-32">
                <form className='w-full' autoComplete='OFF' onSubmit={()=>navigate("/login")}>
                    <h1 className='font-semibold text-4xl'>Sign Up</h1>
                    <div className='my-8'>
                        <label htmlFor={'name'} className="font-medium">Name</label>
                        <div className='flex items-center p-4 border border-gray-300 rounded-xl mt-2'>
                            <i className="text-gray-500 text-lg pr-3 ri-user-3-line"></i>
                            <input id="name" type='text' className='w-full text-sm outline-none' placeholder={'John Doe'} required onChange={(e) => { setName(e.target.value) }} />
                        </div>
                    </div>
                    <div className='my-8'>
                        <label htmlFor={'email'} className="font-medium">Email address</label>
                        <div className='flex items-center p-4 border border-gray-300 rounded-xl mt-2'>
                            <i className="text-gray-500 text-lg pr-3 ri-mail-line"></i>
                            <input id="email" type='email' className='w-full text-sm outline-none' placeholder={'test@gmail.com'} required onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                    </div>
                    <div className='my-8'>
                        <label htmlFor={'password'} className="font-medium">Password</label>
                        <div className='flex items-center p-4 border border-gray-300 rounded-xl mt-2'>
                            <i className="text-gray-500 text-lg pr-3 ri-lock-line"></i>
                            <input id="password" type={showPassword ? 'text' : 'password'} className='w-full text-sm outline-none' placeholder="••••••••••" required onChange={(e) => { setPassword(e.target.value) }} />
                            <i onClick={() => setShowPassword(!showPassword)} className={`cursor-pointer hover:text-gray-600 transition duration-400 text-gray-500 text-lg pr-3 ${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}`}></i>
                        </div>
                    </div>
                    <button type='submit' className='focus:ring ring-indigo-500 flex w-full justify-center text-sm items-center p-5 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-500  rounded-xl mt-2'>
                        Sign Up
                    </button>
                    <span className='text-sm mt-3 inline-block'>Don't have an account? <a href="/login" className='text-indigo-600 font-semibold'>Log in</a></span>
                    <div className='flex items-center justify-center mt-4 text-gray-500'>
                        <hr className='w-full mr-3' />
                        Or
                        <hr className='w-full ml-3' />
                    </div>
                    <button type='button' className='flex w-full gap-5 justify-center text-sm items-center p-4  transition duration-400 border border-gray-300 font-medium hover:shadow-md rounded-xl mt-8'>
                        <img src="./assets/google.png" className='w-8' alt="image" />    Sign up with google
                    </button>
                </form>
            </div>
        </div>
    )
}
