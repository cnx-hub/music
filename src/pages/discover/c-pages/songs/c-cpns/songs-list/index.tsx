import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { SongListWrapper } from './style'
import HYThemeCover from 'components/theme-cover'

import type { rootState } from 'store'

export default memo(function HYSongsList() {
  // redux
  const { categorySongs } = useSelector<rootState, { categorySongs: any }>(
    (state) => ({
      categorySongs: fromJS(state).getIn(['songs', 'categorySongs'])
    }),
    shallowEqual
  )
  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const dispatch = useDispatch()

  return (
    <SongListWrapper>
      <div className="songs-list">
        {songList.map((item: any) => {
          return <HYThemeCover key={item.id} info={item} right="30px" />
        })}
      </div>
    </SongListWrapper>
  )
})
