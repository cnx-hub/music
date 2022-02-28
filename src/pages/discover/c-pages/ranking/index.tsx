import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTop } from './store/actionCreators'

import { RankingLeft, RankingRight, RankingWrapper } from './style'
import HYRankingHeader from './c-cpns/ranking-header'
import HYRankingList from './c-cpns/ranking-list'
import HYTopRanking from './c-cpns/top-ranking'

export default memo(function HYRanking() {
  // redux
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    dispatch(getTop())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HYTopRanking />
      </RankingLeft>
      <RankingRight>
        <HYRankingHeader />
        <HYRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
