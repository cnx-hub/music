import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCategory, getSongList } from './store/actionCreators'

import { SongsWrapper } from './style'
import HYSongsHeader from './c-cpns/songs-header'
import HYSongsList from './c-cpns/songs-list'

export default memo(function HYSongs() {
  // redux
  const dispatch = useDispatch()

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
