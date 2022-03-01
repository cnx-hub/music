import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from './store/actionCreators'

import { SongsWrapper } from './style'
import HYSongsHeader from './c-cpns/songs-header'
import HYSongsList from './c-cpns/songs-list'

export default memo(function HYSongs() {
  // redux
  const dispatch = useDispatch()

  const cat = useLocation()

  useEffect(() => {
    dispatch(changeCurrentCategoryAction((cat.state as any).cat))
  }, [cat, dispatch])

  // hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <HYSongsHeader />
      <HYSongsList />
    </SongsWrapper>
  )
})
