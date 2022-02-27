import React, { memo } from 'react'

import { getSizeImage } from 'utils/format-utils'

import { CoverWrapper } from './style'

interface IProp {
  info: any
}

export default memo(function HYRadioRecommendCover(
  props: React.PropsWithChildren<IProp>
) {
  const { info } = props

  return (
    <CoverWrapper>
      <a href="#">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">
        {info.name}
      </a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
})
