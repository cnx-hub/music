import React, { PureComponent } from 'react'
import { Typography } from 'antd'

type FallbackRender = (props: { error: Error | null }) => React.ReactElement

// 错误边界处理
export default class ErrorBoundary extends PureComponent<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  constructor(
    props: React.PropsWithChildren<{ fallbackRender: FallbackRender }>
  ) {
    super(props)

    this.state = {
      error: null
    }
  }
  // 错误边界处理
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state

    const { fallbackRender, children } = this.props
    if (error) {
      return fallbackRender({ error: error })
    } else {
      return children
    }
  }
}

// 错误边界组件
export const FullPageErrorFallback = ({ error }: { error: Error | null }) => {
  return <Typography.Text type={'danger'}>{error?.message}</Typography.Text>
}
