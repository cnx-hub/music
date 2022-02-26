import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'

import { singerAlphas } from 'utils/handle-data'
import { getArtistListAction } from '../../../../store/actionCreators'

import type { rootState } from 'store'
import type { IcurrentType } from 'pages/discover/c-pages/artist/store/reducer'

import { AlphaListWrapper } from './style'

export default memo(function HYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState('热门')
  // redux hooks
  const { currentArea, currentType } = useSelector<
    rootState,
    { currentType: IcurrentType; currentArea: number }
  >(
    (state) => ({
      currentArea: fromJS(state).getIn(['artist', 'currentArea']) as number,
      currentType: fromJS(state).getIn([
        'artist',
        'currentType'
      ]) as IcurrentType
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  // 请求数据
  useEffect(() => {
    setCurrentAlpha('热门')
  }, [currentArea, currentType])
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha))
  }, [currentArea, currentType, currentAlpha, dispatch])

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
})
