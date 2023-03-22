import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { PATH } from '../constants/common'
import { useAuth } from '../hooks/useAuth'

const PublicRoutes = () => {
  const location = useLocation()
  const auth = localStorage.getItem('accessToken')

  return (
    <>
      {auth ? (
        <Navigate to={PATH.HOME} state={{ from: location }} />
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default PublicRoutes
