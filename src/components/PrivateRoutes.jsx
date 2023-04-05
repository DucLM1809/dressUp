import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { PATH } from '../constants/common'
import { useAuth } from '../hooks/useAuth'

const PrivateRoutes = () => {
  const location = useLocation()
  const auth = useAuth()
  return (
    <>
      {auth ? (
        <Outlet />
      ) : (
        <Navigate to={PATH.LOGIN} state={{ from: location }} replace />
      )}
    </>
  )
}

export default PrivateRoutes
