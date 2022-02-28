import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'

import { getRanking, changeCurrentIndex } from '../../store/actionCreators'
import { getSizeImage } from 'utils/format-utils'

import { TopRankingWrapper } from './style'
import type { rootState } from 'store'

export default memo(function HYTopRanking() {
  // redux
  const { topList, currentIndex } = useSelector<
    rootState,
    { topList: any[]; currentIndex: number }
  >(
    (state) => ({
      topList: fromJS(state).getIn(['ranking', 'topList']) as any[],
      currentIndex: fromJS(state).getIn(['ranking', 'currentIndex']) as number
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id
    if (!id) return
    dispatch(getRanking(id))
  }, [topList, dispatch, currentIndex])

  // handle function
  const hanldeItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index))
    const id = topList[currentIndex].id
    dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          )
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: currentIndex === index })}
              onClick={(e) => hanldeItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
