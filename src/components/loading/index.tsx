import styled from 'styled-components'
import { Spin } from 'antd'

// 等待加载的渲染组件
export const FullPageLoading = () => {
  return (
    <FullPage>
      <Spin size="large"></Spin>
    </FullPage>
  )
}

export const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
