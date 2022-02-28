import React, { memo } from 'react'

import { RankingLeft, RankingRight, RankingWrapper } from './style'

export default memo(function HYRanking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>LEFT</RankingLeft>
      <RankingRight>RIGHT</RankingRight>
    </RankingWrapper>
  )
})
