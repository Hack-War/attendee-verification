import React from 'react'
import Input from '../components/Login/Input'

export default function Login() {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="w-full h-full bg-blue-500 hidden"></div>
            <div className="w-full h-full py-20 px-5">
                <h3>Login</h3>
                <Input label="Email address" id="email" icon="" handleUpdate={(e) => (alert())} value={'test@gmail.com'} />
                <Input label="Password" id="email" icon="" handleUpdate={(e) => (alert())} value={'test@gmail.com'} password />
            </div>
        </div>
    )
}
