import React from 'react'
import { useUserContext } from '../../context/StudentContext'

export default function StudentDashboard() {
  const {user} = useUserContext()
  console.log(user.role);
  return (
    <>
        <div className="relative overflow-x-auto min-w-full">
          <h2>Hi Student</h2>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.created_at}</td>
                <td className="py-3 px-4">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>          
            </tbody>
          </table>
        </div>
    </>
  )
}
