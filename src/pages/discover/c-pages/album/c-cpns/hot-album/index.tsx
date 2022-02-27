import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fromJS } from 'immutable'

import { getHotAlbumsAction } from '../../store/actionCreators'

import { HotAlbumWrapper } from './style'
import HYThemeHeaderNormal from 'components/theme-header-normal'
import HYAlbumCover from 'components/album-cover'

import type { rootState } from 'store'

export default memo(function HYHotAlbum() {
  // redux hooks
  const { hotAlbums } = useSelector<rootState, { hotAlbums: any[] }>(
    (state) => ({
      hotAlbums: fromJS(state).getIn(['album', 'hotAlbums']) as any[]
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <HYThemeHeaderNormal title={'热门新碟'} rightSlot={''} />
      <div className="album-list">
        {hotAlbums.slice(0, 10).map((item) => {
          return (
            <HYAlbumCover
              info={item}
              size={'130px'}
              width={'153px'}
              bgp={'-845px'}
              key={item.id}
            />
          )
        })}
      </div>
    </HotAlbumWrapper>
  )
})
