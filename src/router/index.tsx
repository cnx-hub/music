import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const HYDiscover = React.lazy(() => import('pages/discover'))

const HYFriend = React.lazy(() => import('pages/friend'))
const HYMine = React.lazy(() => import('pages/mine'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <HYDiscover />,
    children: [
      {
        element: <Navigate to={'artist'} />,
        index: true
      }
    ]
  },
  {
    path: '/friend',
    element: <HYFriend />
  },
  {
    path: '/mine',
    element: <HYMine />
  }
]

export default router
