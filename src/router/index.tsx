import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const HYDiscover = React.lazy(() => import('pages/discover'))
const HYArtist = React.lazy(() => import('pages/discover/c-pages/artist'))
const HYRecommend = React.lazy(() => import('pages/discover/c-pages/recommend'))
const HYRanking = React.lazy(() => import('pages/discover/c-pages/ranking'))
const HYSongs = React.lazy(() => import('pages/discover/c-pages/songs'))
const HYDjradio = React.lazy(() => import('pages/discover/c-pages/djradio'))
const HYAlbum = React.lazy(() => import('pages/discover/c-pages/album'))
const HYPlayer = React.lazy(() => import('pages/player'))

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
      },
      {
        path: 'artist',
        element: <HYArtist />
      },
      {
        path: 'recommend',
        element: <HYRecommend />
      },
      {
        path: 'ranking',
        element: <HYRanking />
      },
      {
        path: 'songs',
        element: <HYSongs />
      },
      {
        path: 'djradio',
        element: <HYDjradio />
      },
      {
        path: 'album',
        element: <HYAlbum />
      },
      {
        path: 'player',
        element: <HYPlayer />
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
