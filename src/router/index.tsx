import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const HYDiscover = React.lazy(() => import('pages/discover'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <HYDiscover />
  }
]

export default router
