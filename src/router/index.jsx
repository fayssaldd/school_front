import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Users from '../pages/Users'
import Found from '../pages/Found'
import Layout from '../layouts/Layout'
import GuestLayout from '../layouts/GuestLayout'
import StudentDashboard from '../components/Student/StudentDashboard'

import AdminDashboardLayout from '../layouts/Administration/AdminDashboardLayout'
import AdminDashboard from '../components/Admin/AdminDashboard'
import StudentDashboardLayout from '../layouts/StudentDashboardLayout'
import TeacherDashboard from '../components/Teacher/TeacherDashboard'
import TeacherDashboardLayout from '../layouts/Teacher/TeacherDashboardLayout'
import ManagePatents from '../components/Admin/ManageParents'

export const LOGIN_ROUTE = '/login'
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'
const ADMIN_BASE_ROUTE = '/admin'
export const ADMIN_DASHBOARD_ROUTE = ADMIN_BASE_ROUTE+'/dashboard'
export const ADMI_MANEGE_PARENTS_ROUTE = ADMIN_BASE_ROUTE+'/manage-parents'
export const TEACHER_DASHBOARD_ROUTE = '/teacher/dashboard'
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
        
            },
            {
                path: '/register',
                element: <Register/>
                
            },
            {
                path: '/users',
                element: <Users/>
                
            },

        ]
    },
    {
        element : <GuestLayout/>,
        children:[
            {
                path: LOGIN_ROUTE,
                element: <Login/>
                
            },
        ]
    },
    {
        element : <StudentDashboardLayout/>,
        children:[
            {
                path: STUDENT_DASHBOARD_ROUTE,
                element : <StudentDashboard/>
            },
        ]
    },
    {
        element : <AdminDashboardLayout/>,
        children:[
            {
                path: ADMIN_DASHBOARD_ROUTE,
                element : <AdminDashboard/>
            },
            {
                path: ADMI_MANEGE_PARENTS_ROUTE,
                element : <ManagePatents/>
            },

        ]
    },
    {
        element : <TeacherDashboardLayout/>,
        children:[
            {
                path: TEACHER_DASHBOARD_ROUTE,
                element : <TeacherDashboard/>
            },
        ]
    },
    {
        path: '*',
        element: <Found/>
    }

])