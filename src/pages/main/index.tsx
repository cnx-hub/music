import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HYAppHeader from 'components/app-header'

export default memo(function HYMain() {
  return (
    <BrowserRouter>
      <HYAppHeader />
    </BrowserRouter>
  )
})
