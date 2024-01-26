import React from 'react'
import {useUserContext } from '../context/StudentContext'

export default function Home() {
  const context = useUserContext()
  return (
    <>
    {
      context.user.name
    }
    <h1 className='text-3xl'>Hi from Home Page</h1>
    </>
  )
}
