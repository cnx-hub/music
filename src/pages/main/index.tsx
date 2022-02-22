import React, { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary, {
  FullPageErrorFallback
} from 'components/error-boundaries'

import { FullPageLoading } from 'components/loading'

import HYAppHeader from 'components/app-header'
import HYAppFooter from 'components/app-footer'

export default memo(function HYMain() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <HYAppHeader />
        <Suspense fallback={FullPageLoading}>123</Suspense>
        <HYAppFooter />
      </ErrorBoundary>
    </BrowserRouter>
  )
})
