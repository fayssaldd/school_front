import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

;

import {GaugeIcon } from 'lucide-react';


import { LOGIN_ROUTE, TEACHER_DASHBOARD_ROUTE } from '../../router';
import Logo from '../../components/Logo';
import { useUserContext } from '../../context/StudentContext';
import StudentApi from '../../services/Api/Student/StudentApi';
import StudentDropDownMenu from '../StudentDropDownMenu';
import { ModeToggle } from '../../components/mode-toggle';
import TeacherAdiministrationSideBar from './TeacherAdiministrationSideBar';


export default function TeacherDashboardLayout() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    // const [user, setUser] = useState({})
    const {authenticated,setUser, setAuthenticated,user, logout: contextLogout} = useUserContext()
    useEffect(()=>{
        console.log(typeof authenticated);
        if(authenticated === true){
            setIsLoading(false)
            StudentApi.getUser().then(({data})=>{
                setUser(data)
                setAuthenticated(true)
            }).catch((reason)=>{
                contextLogout()
            })
        }else{
            navigate(LOGIN_ROUTE)
        }

    },[authenticated])
    if(isLoading){
        return <></>
    }
  return (
    <>
        <header>
        <div className='items-center justify-between flex bg-opacity-90 px-12 py-5'>
            <div className='text-2xl text-white font-semibold inline-flex items-center'>
                <Logo/>
            </div>
            <div>
                <ul className='flex text-white place-items-center'>
                    <li className='ml-5 px-2 py-1'><Link className='flex text-black dark:text-white' to={TEACHER_DASHBOARD_ROUTE}> <GaugeIcon/>Dashboard</Link></li>
                    {/* <Button onClick={logout} >Logout</Button> */}
                    <li className='ml-5 px-2 py-1'><StudentDropDownMenu/></li>
                    <li className='ml-5 px-2 py-1'>
                        <ModeToggle/>
                    </li>

                    {/* <li className='ml-5 px-2 py-1'><Link to="/login">Logout</Link></li> */}
                </ul>
            </div>
        </div>
        </header>
        <hr />
        <main className='mx-auto px-10  space-y-4 py-4'>
            <div className="flex">
                <div className={'w-100 md:w-1/4'}>
                    <TeacherAdiministrationSideBar/>
                </div>
                <div className={'w-100 md:w-3/4'}>
                    <Outlet/>
                </div>
            </div>
        </main>
    </>
  )
}
