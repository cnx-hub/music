import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import { Carousel } from 'antd'
import classNames from 'classnames'

import {
  getRadioCategories,
  changeCurrentIdActio
} from '../../store/actionCreators'

import { CategoryWrapper, CategoryContent, CategoryItemImage } from './style'

import type { CarouselRef } from 'types/lib'
import type { rootState } from 'store'

const PAGE_SIZE = 16

export default memo(function HYRadioCategory() {
  // redux hooks
  const dispatch = useDispatch()
  const { categories, currentId } = useSelector<
    rootState,
    { currentId: number; categories: any[] }
  >(
    (state) => ({
      currentId: fromJS(state).getIn(['djradio', 'currentId']) as number,
      categories: fromJS(state).getIn(['djradio', 'categories']) as any[]
    }),
    shallowEqual
  )

  // data handle
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1

  // hooks
  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])
  const carouselRef = useRef<null | CarouselRef>(null)

  // handle function
  function getSize(index: number) {
    return index * PAGE_SIZE > categories.length
      ? index * PAGE_SIZE
      : categories.length
  }

  return (
    <CategoryWrapper>
      <div
        className="arrow arrow-left"
        onClick={(e) =>
          (carouselRef as React.MutableRefObject<CarouselRef>).current.prev()
        }
      />
      <CategoryContent>
        <Carousel dots={{ className: 'dots' }} ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div className="category-page" key={index}>
                  {categories
                    .slice(index * PAGE_SIZE, getSize(index + 1))
                    .map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={classNames('category-item', {
                            active: currentId === item.id
                          })}
                          onClick={(e) => {
                            dispatch(changeCurrentIdActio(item.id))
                          }}
                        >
                          <CategoryItemImage
                            className="image"
                            imgUrl={item.picWebUrl}
                          />
                          <span>{item.name}</span>
                        </div>
                      )
                    })}
                </div>
              )
            })}
        </Carousel>
      </CategoryContent>
      <div
        className="arrow arrow-right"
        onClick={(e) =>
          (carouselRef as React.MutableRefObject<CarouselRef>).current.next()
        }
      />
    </CategoryWrapper>
  )
})
