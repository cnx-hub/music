import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getTopData } from '../../store/actionCreators'

import { RankingWrapper } from './style'
import HYThemeHeaderRCM from 'components/theme-header-rcm'
import HYTopRanking from 'components/top-ranking'

import type { rootState } from 'store'

export default memo(function HYRankingList() {
  // redux
  const dispatch = useDispatch()
  const { topUpList, topNewList, topOriginList } = useSelector<
    rootState,
    { topUpList: any; topNewList: any; topOriginList: any }
  >(
    (state) => ({
      topUpList: fromJS(state).getIn(['recommend', 'topUpList']),
      topNewList: fromJS(state).getIn(['recommend', 'topNewList']),
      topOriginList: fromJS(state).getIn(['recommend', 'topOriginList'])
    }),
    shallowEqual
  )

  // hooks
  useEffect(() => {
    dispatch(getTopData(0))
    dispatch(getTopData(2))
    dispatch(getTopData(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <HYTopRanking info={topUpList} />
        <HYTopRanking info={topNewList} />
        <HYTopRanking info={topOriginList} />
      </div>
    </RankingWrapper>
  )
})
