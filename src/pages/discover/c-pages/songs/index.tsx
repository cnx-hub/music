import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getCategory, getSongList } from './store/actionCreators'

import { SongsWrapper } from './style'
import HYSongsHeader from './c-cpns/songs-header'
import HYSongsList from './c-cpns/songs-list'
import { rootState } from 'store'

export default memo(function HYSongs() {
  // redux
  const dispatch = useDispatch()
  // const { categorySongs } = useSelector<rootState, { categorySongs: any }>(state => ({
  //   categorySongs: fromJS(state).getIn(['songs', 'categorySongs'])
  // }))
  // const cat = categorySongs.cat
  // console.log(cat);

  // hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getSongList(0))
  // }, [cat, dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <HYSongsHeader />
      <HYSongsList />
    </SongsWrapper>
  )
})
