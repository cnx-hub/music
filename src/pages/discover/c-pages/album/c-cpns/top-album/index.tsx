import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fromJS } from 'immutable'

import { getTopAlbumsAction } from '../../store/actionCreators'

import { TopAlbumWrapper } from './style'
import HYThemeHeaderNormal from 'components/theme-header-normal'
import HYAlbumCover from 'components/album-cover'
import HYPagination from 'components/pagination'

import type { rootState } from 'store'

export default memo(function HYTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)

  // redux-hooks
  const { topAlbums, total } = useSelector<
    rootState,
    { topAlbums: any[]; total: number }
  >(
    (state) => ({
      topAlbums: fromJS(state).getIn(['album', 'topAlbums']) as any[],
      total: fromJS(state).getIn(['album', 'topTotal']) as number
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])

  const onChangePage = (page: number, PageSize: number) => {
    setCurrentPage(page)
    dispatch(getTopAlbumsAction(page))
  }

  return (
    <TopAlbumWrapper>
      <HYThemeHeaderNormal title={'全部新碟'} rightSlot={''} />
      <div className="album-list">
        {topAlbums.map((item) => {
          return (
            <HYAlbumCover
              key={item.id}
              info={item}
              size={'130px'}
              width={'153px'}
              bgp={'-845px'}
            />
          )
        })}
      </div>
      <HYPagination
        current={currentPage}
        total={total}
        pageSize={30}
        onChange={onChangePage}
      />
    </TopAlbumWrapper>
  )
})
