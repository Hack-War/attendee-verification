import React from 'react'
import { Link } from 'react-router-dom'
import users from "../data/users"
export default function Users() {
    return (
        <div className='container mx-auto h-dash-height py-20'>
            <div className='shadow-md bg-white w-full flex flex-col justify-start align-center border rounded-xl pb-10 '>
                <div className='flex items-center justify-between px-10 py-5 border-b mb-5 '>
                    <h3 className='font-medium text-xl'>Attendees</h3>                      <h3 className='font-medium text-lg'>Define@2022</h3>

                </div>
                <table >
                    <thead>
                        <tr className='flex items-center justify-evenly h-12'>
                            <th className='flex items-center justify-center w-1/5'>SI</th>
                            <th className='flex items-center justify-center w-1/5'>Name</th>
                            <th className='flex items-center justify-center w-1/5'>Email</th>
                            <th className='flex items-center justify-center w-1/5'>Phone</th>
                            <th className='flex items-center justify-center w-1/5'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ name, phone, email, verified, id }) => {
                            return (
                                <tr className='flex items-center justify-evenly h-16 mt-5 border-t border-b'>
                                    <td className='flex items-center justify-center w-1/5'>#{id}</td>
                                    <td className='flex items-center justify-center w-1/5'>{name}</td>
                                    <td className='flex items-center justify-center w-1/5'>{email}</td>
                                    <td className='flex items-center justify-center w-1/5'>{phone}</td>
                                    <td className='flex items-center justify-center w-1/5'><div className={`rounded-3xl  p-3 font-medium ${verified ? ' bg-green-200 text-green-700':' bg-red-200 text-red-700'} text-sm`}>{verified ? 'Verified' : 'Not verified'}</div> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
