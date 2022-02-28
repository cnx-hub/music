import React, { memo, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import HYSongsCategory from '../songs-category'

import type { rootState } from 'store'

export default memo(function HYSongsHeader() {
  // hooks
  const [showCategory, setShowCategory] = useState(false)

  // redux
  const { currentCategory } = useSelector<
    rootState,
    { currentCategory: string }
  >(
    (state) => ({
      currentCategory: fromJS(state).getIn([
        'songs',
        'currentCategory'
      ]) as string
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>{currentCategory}</span>
          <i className="sprite_icon2"></i>
          {showCategory ? <HYSongsCategory /> : null}
        </button>
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
