import React, { memo } from 'react'

import { DjRadioWrapper } from './style'
import HYRadioCategory from './c-cpns/radio-category'

export default memo(function HYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <HYRadioCategory />
    </DjRadioWrapper>
  )
})
