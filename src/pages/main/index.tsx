import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import ErrorBoundary, {
  FullPageErrorFallback
} from 'components/error-boundaries'

import { FullPageLoading } from 'components/loading'
import HYAppHeader from 'components/app-header'
import HYAppFooter from 'components/app-footer'
import HYAppPlayBar from 'pages/player/app-play-bar'

import router from 'router'

export default memo(function HYMain() {
  const element = useRoutes(router)
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <HYAppHeader />
      <Suspense fallback={<FullPageLoading />}>
        {/* 注册路由 */}
        {element}
      </Suspense>
      <HYAppFooter />
      <HYAppPlayBar />
    </ErrorBoundary>
  )
})
