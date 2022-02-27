import React, { memo } from 'react'

import { DjRadioWrapper } from './style'
import HYRadioCategory from './c-cpns/radio-category'
import HYRadioRecommend from './c-cpns/radio-recommend'
import HYRadioRanking from './c-cpns/radio-ranking'

export default memo(function HYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <HYRadioCategory />
      <HYRadioRecommend />
      <HYRadioRanking />
    </DjRadioWrapper>
  )
})
