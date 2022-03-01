import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getAlbum } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import HYThemeHeaderRCM from 'components/theme-header-rcm'
import HYAlbumCover from 'components/album-cover'

import type { rootState } from 'store'
import type { CarouselRef } from 'types/lib'

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
  const carouselRef = useRef<CarouselRef | null>(null)
  useEffect(() => {
    dispatch(getAlbum())
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title={'新碟上架'} moreLink="/discover/album" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current?.prev()}
        ></div>
        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <HYAlbumCover key={item.id} info={item} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current?.next()}
        ></div>
      </div>
    </AlbumWrapper>
  )
})

export default HYNewAlbum
