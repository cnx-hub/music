import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary, {
  FullPageErrorFallback
} from 'components/error-boundaries'

import HYAppHeader from 'components/app-header'
import HYAppFooter from 'components/app-footer'

export default memo(function HYMain() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <HYAppHeader />
        <HYAppFooter />
      </ErrorBoundary>
    </BrowserRouter>
  )
})
