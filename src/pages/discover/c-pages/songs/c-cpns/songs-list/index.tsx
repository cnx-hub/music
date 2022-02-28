import React, { memo, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getSongList } from '../../store/actionCreators'

import { SongListWrapper } from './style'
import HYThemeCover from 'components/theme-cover'
import HYPagination from 'components/pagination'

import type { rootState } from 'store'
import { PER_PAGE_NUMBER } from '../../store/contant'

export default memo(function HYSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1)
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

  function onChange(page: number, pageSize: number) {
    setCurrentPage(page)
    dispatch(getSongList(page))
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {songList.map((item: any) => {
          return <HYThemeCover key={item.id} info={item} right="30px" />
        })}
      </div>
      <HYPagination
        total={total}
        current={currentPage}
        pageSize={PER_PAGE_NUMBER}
        onChange={onChange}
      />
    </SongListWrapper>
  )
})
