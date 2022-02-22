import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'

import HYAppHeader from 'components/app-header'
import HYAppFooter from 'components/app-footer'

export default memo(function HYMain() {
  return (
    <BrowserRouter>
      <HYAppHeader />
      <HYAppFooter />
    </BrowserRouter>
  )
})
