import React, { createContext, useContext, useState } from 'react';
import StudentApi from '../services/Api/Student/StudentApi';
export const StudentStateContext = createContext({
    user: {},
    authenticated : false,
    login: (email, password)=>{},
    logout: ()=>{},
    setAuthenticated: ()=>{},
    setToken: ()=>{},
})
export default function StudentContext({children}) {
    const [user, setUser] = useState({})
    const [authenticated,_setAuthenticated] = useState( 'true' === window.localStorage.getItem('AUTHENICATED'))
    const login = async (email, password)=>{
        // await StudentApi.getCsrfToken()
        return await StudentApi.login(email, password)
    }

    const setToken = (token)=>{
        window.localStorage.setItem('token', token)
    }
    
    const logout = ()=>{
        setUser({})
        setAuthenticated(false)
        
    }
    const setAuthenticated = (isAuthenticated)=>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENICATED',isAuthenticated)
    }

    

    return (
        <>
        <StudentStateContext.Provider value={{
            user,
            login,
            authenticated,
            setUser,
            setAuthenticated,
            setToken,
            logout,
            
        }}>
            {children}
        </StudentStateContext.Provider>   
        </>
    );
}

export const useUserContext = ()=> useContext(StudentStateContext)
   