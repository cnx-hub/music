import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getBanner } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'

import type { rootState } from 'store'
import type { CarouselRef } from 'types/lib'

export default memo(function HYTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)
  // redux
  const { banners } = useSelector<rootState, { banners: any[] }>(
    (state) => ({
      banners: fromJS(state).getIn(['recommend', 'topBanners']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  const bannerRef = useRef<CarouselRef | null>(null)
  useEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0)
  }, [])

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay={true}
            effect={'fade'}
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={(e) => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
