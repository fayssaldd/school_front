import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Layout() {
    return <>
        <header className=''>
        <div className='items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-5'>
            <div className='text-2xl text-white font-semibold inline-flex items-center'>
                <Logo/>
                {/* <span>School management</span> */}
            </div>
            <div>
                <ul className='flex text-white'>
                    <li className='ml-5 px-2 py-1'><Link to="/">Home page</Link></li>
                    <li className='ml-5 px-2 py-1'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
        </header>
        <main className='container'>
        <Outlet/>
        </main>
    </>
  
}
