import React, { memo } from 'react'

import { PanelWrapper } from './style'
import HYPlayHeader from './c-cpns/play-header'

export default memo(function HYAppPlayPanel() {
  return (
    <PanelWrapper>
      <HYPlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
      </div>
    </PanelWrapper>
  )
})
