import React, { memo } from 'react'

import { AblumWrapper } from './style'
import HYHotAlbum from './c-cpns/hot-album'
import HYTopAlbum from './c-cpns/top-album'

export default memo(function HYAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <HYHotAlbum />
      <HYTopAlbum />
    </AblumWrapper>
  )
})
