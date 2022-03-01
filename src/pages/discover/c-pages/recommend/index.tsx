import React, { memo } from 'react'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'

export default memo(function HYRecommend() {
  return (
    <RecommendWraper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
