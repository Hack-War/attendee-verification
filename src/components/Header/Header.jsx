import React from 'react'

export default function Header() {
    return (
        <header className='border-b'>
            <nav className='container mx-auto flex items-center justify-between h-24 '><a href='#' className='font-bold text-2xl'>etter<span className='text-indigo-700 font-bold'>•</span></a>
                <ul className='list-none flex items-center justify-start gap-10'>
                    <li><a href="#" className='hover:underline hover:font-medium hover:text-indigo-600 transition duration-400'>Events</a></li>
                    <li><a href="#" className='hover:underline hover:font-medium hover:text-indigo-600 transition duration-400'>Profile</a></li>
                    <li><a href="#" className='hover:underline hover:font-medium hover:text-indigo-600 transition duration-400'>Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}
