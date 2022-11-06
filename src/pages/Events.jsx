import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
    return (
        <div className='container mx-auto h-dash-height py-20'>
            <div className='shadow-md bg-white w-full flex flex-col justify-start align-center border rounded-xl pb-10 '>
                <div className='flex items-center justify-between px-10 py-5 border-b mb-5 '>
                    <h3 className='font-medium text-xl'>Events</h3>                 <Link to={'/events/new'} className=' focus:ring ring-indigo-500 flex justify-center text-sm items-center p-3 w-32 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-500  rounded-lg'>
                        Create new
                    </Link>
                </div>
                <table >
                    <thead>
                        <tr className='flex items-center justify-evenly h-12'>
                            <th className='flex items-center justify-center w-1/5'>SI</th>
                            <th className='flex items-center justify-center w-1/5'>Event name</th>
                            <th className='flex items-center justify-center w-1/5'>Location</th>
                            <th className='flex items-center justify-center w-1/5'>Time</th>
                            <th className='flex items-center justify-center w-1/5'>Attendee list</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex items-center justify-evenly h-16 mt-5 border-t border-b'>
                            <td className='flex items-center justify-center w-1/5'>#1</td>
                            <td className='flex items-center justify-center w-1/5'>Define 2022</td>
                            <td className='flex items-center justify-center w-1/5'>Trivandrum</td>
                            <td className='flex items-center justify-center w-1/5'>31.10.22 6AM to 2.11.22 6PM</td>
                            <td className='flex items-center justify-center w-1/5'> <Link className=' focus:ring ring-gray-50 flex justify-center gap-1 text-sm items-center p-3 w-32 bg-white font-medium border border-gray-300 hover:bg-gray-50 transition duration-500  rounded-lg'>
                                <i className="ri-eye-line"></i>   View
                            </Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
