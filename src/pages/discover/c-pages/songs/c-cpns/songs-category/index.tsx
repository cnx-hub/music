import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import {
  changeCurrentCategoryAction,
  getSongList
} from '../../store/actionCreators'

import { CategoryWrapper } from './style'

import type { rootState } from 'store'

export default memo(function HYSongsCategory() {
  // redux
  const { category } = useSelector<rootState, { category: any[] }>(
    (state) => ({
      category: fromJS(state).getIn(['songs', 'category']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  function selectCategory(name: string) {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getSongList(0))
  }
  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={(e) => selectCategory('全部')}>
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={'item' + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem: any) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <span
                        className="link"
                        onClick={(e) => selectCategory(sItem.name)}
                      >
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  )
                })}
              </dd>
            </dl>
          )
        })}
      </div>
    </CategoryWrapper>
  )
})
