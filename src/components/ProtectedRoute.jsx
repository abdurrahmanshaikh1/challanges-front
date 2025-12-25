import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({children}) => {
    const {user} = useSelector((state)=> state.auth)
    if(!user){
        return <Navigate to='/' replace />
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoute