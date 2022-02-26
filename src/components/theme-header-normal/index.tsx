import React, { memo } from 'react'

import { HeaderWrapper } from './style'

interface IThemeHeader {
  title: string
  rightSlot: string
}

export default memo(function HYThemeHeaderNormal(
  props: React.PropsWithChildren<IThemeHeader>
) {
  const { title, rightSlot } = props
  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">{rightSlot}</div>
    </HeaderWrapper>
  )
})
