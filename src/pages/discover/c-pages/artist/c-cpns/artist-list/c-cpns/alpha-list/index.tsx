import React, { memo, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'

import { singerAlphas } from 'utils/handle-data'

import type { rootState } from 'store'
import type { IcurrentType } from 'pages/discover/c-pages/artist/store/reducer'

import { AlphaListWrapper } from './style'

export default function HYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState('热门')

  const { currentArea, currentType } = useSelector<
    rootState,
    { currentType: IcurrentType; currentArea: number }
  >(
    (state) => ({
      currentType: fromJS(state).getIn([
        'artist',
        'currentType'
      ]) as IcurrentType,
      currentArea: fromJS(state).getIn(['artist', 'currentType']) as number
    }),
    shallowEqual
  )

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map((item) => {
          const isActive = currentAlpha === item
          return (
            <div
              key={item}
              className={classNames('item', { active: isActive })}
            >
              <span onClick={() => setCurrentAlpha(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          )
        })}
    </AlphaListWrapper>
  )
}
HYAlphaList.whyDidYouRender = true
