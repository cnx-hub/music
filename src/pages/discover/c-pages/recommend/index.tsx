import React, { memo } from 'react'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import HYTopBanner from './c-cpns/top-banner'

export default memo(function HYRecommend() {
  return (
    <RecommendWraper>
      <HYTopBanner />
    </RecommendWraper>
  )
})
