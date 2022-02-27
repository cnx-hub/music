import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fromJS } from 'immutable'

import { getRadioRecommend } from '../../store/actionCreators'

import { RecommendWrapper } from './style'
import HYThemeHeaderNormal from 'components/theme-header-normal'
import HYRadioRecomendCover from 'components/radio-recommend-cover'

import type { rootState } from 'store'

export default memo(function HYRadioRecommend() {
  // redux hooks
  const { currentId, recommends } = useSelector<
    rootState,
    { currentId: number; recommends: any[] }
  >(
    (state) => ({
      currentId: fromJS(state).getIn(['djradio', 'currentId']) as number,
      recommends: fromJS(state).getIn(['djradio', 'recommends']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // hooks
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommend(currentId))
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <HYThemeHeaderNormal title={'优秀新电台'} rightSlot={''} />
      <div className="radio-list">
        {recommends.slice(0, 5).map((item) => {
          return <HYRadioRecomendCover info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
})
