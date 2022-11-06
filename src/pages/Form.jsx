import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

export default function Form() {
    const fileRef = useRef()
    const [value, handleChange] = useForm({
        eventName: "",
        location: "",
        startDateTime: "",
        endDateTime: "",
        additionalNote: "",
        contact: ""
    })
    const navigate = useNavigate()
    return (
        <div className='container mx-auto flex items-center p-10 justify-center w-full h-dash-height'>
            <form className='flex flex-col items-center justify-start w-form' onSubmit={(e) => {
                e.preventDefault()
                console.log(value)
                navigate("/events")
            }}>
                <h1 className='font-medium text-3xl border-b-2 border-indigo-600'>Create check-in for a new event.</h1>
                <div className='flex items-center justify-between gap-4  w-full'>
                    <div className='mt-7'>
                        <label htmlFor="eventName" className='font-medium'>Event name </label><br />
                        <input type="text" name="eventName" placeholder="define@2022" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.eventName} onChange={handleChange} id="eventName" />
                    </div>
                    <div className='mt-7'>
                        <label htmlFor="location" className='font-medium'>Location </label><br />
                        <input type="text" name="location" placeholder="Trivandrum" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.location} onChange={handleChange} id="eventName" />
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4  w-form'>
                    <div className='mt-7'>
                        <label htmlFor="start-date-time" className='font-medium'>Start Date & Time </label><br />
                        <input type="datetime-local" name="start-date-time" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.startDateTime} onChange={handleChange} id="start-date-time" />
                    </div>
                    <div className='mt-7'>
                        <label htmlFor="end-date-time" className='font-medium'>End Date & Time </label><br />
                        <input type="datetime-local" name="end-date-time" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.endDateTime} onChange={handleChange} id="end-date-time" />
                    </div>
                </div>

                <div className='flex items-center justify-between gap-4  w-form'>
                    <div className='mt-7'>
                        <label htmlFor="additionalNote" className='font-medium'>Additional note </label><br />
                        <input type="text" name="additionalNote" placeholder="eg: Food Court Ticket" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.additionalNote} onChange={handleChange} id="contact" />
                    </div>
                    <div className='mt-7'>
                        <label htmlFor="contact" className='font-medium'>Contact </label><br />
                        <input type="text" name="contact" placeholder="test@gmail.com" required className='focus:border-indigo-500 transition duration-400 mt-2 p-5 w-60 rounded-xl border border-gray-300  text-sm outline-none' value={value.contact} onChange={handleChange} id="additionalNote" />
                    </div>
                </div>
                <div className='mt-7 w-full'>
                    <button type='submit' className='focus:ring ring-gray-500 flex w-full justify-center text-sm items-center p-5 bg-white border border-gray-300 transition duration-500  rounded-xl'>
                        Upload the csv file which contains the data of users. &nbsp; <a className='hover:underline text-indigo-600 font-medium' onClick={() => fileRef.current.click()}>Browse</a>
                    </button>
                    <input type='file' ref={fileRef} className='hidden' />
                </div>
                <span className='italic text-xs mt-1 text-red-500'>Note :- email field is compulsory*</span>
                <button type='submit' className='mt-7 focus:ring ring-indigo-500 flex w-full justify-center text-sm items-center p-5 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-500  rounded-xl'>
                    Submit
                </button>
            </form>
        </div >
    )
}
