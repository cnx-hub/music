import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getAlbum } from '../../store/actionCreators'

import { AlbumWrapper } from './style'
import HYThemeHeaderRCM from 'components/theme-header-rcm'

import type { rootState } from 'store'

const HYNewAlbum = memo(() => {
  // redux
  const { newAlbum } = useSelector<rootState, { newAlbum: any[] }>(
    (state) => ({
      newAlbum: fromJS(state).getIn(['recommend', 'newAlbum']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    dispatch(getAlbum())
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title={'新碟上架'} moreLink="/discover/album" />
    </AlbumWrapper>
  )
})

export default HYNewAlbum
