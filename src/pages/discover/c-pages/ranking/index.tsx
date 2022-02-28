import React, { memo } from 'react'

import { RankingLeft, RankingRight, RankingWrapper } from './style'
import HYRankingHeader from './c-cpns/ranking-header'
import HYRankingList from './c-cpns/ranking-list'
import HYTopRanking from './c-cpns/top-ranking'

export default memo(function HYRanking() {
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
