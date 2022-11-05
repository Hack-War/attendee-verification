import React from 'react'

export default function Input({ id, label, handleUpdate, value, icon, password }) {
    return (
        <div className='my-8'>
            <label htmlFor={id} className="font-medium">{label}</label>
            <div className=' p-4 border border-gray-300 rounded-xl mt-2'><i className='ri'></i> <input type={password ? 'password' : 'text'} className='text-sm ' value={value} onChange={handleUpdate} /></div>
        </div>
    )
}
