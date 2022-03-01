import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const HYThemeHeaderSmall = memo(function (
  props: React.PropsWithChildren<{ more: string; title: string }>
) {
  const { title, more } = props

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})

export default HYThemeHeaderSmall
