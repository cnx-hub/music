import React, { memo } from 'react'

import { HYArtistWrapper } from './style'
import HYArtistCategory from 'pages/discover/c-pages/artist/c-cpns/artist-category'

export default memo(function HYArtist() {
  return (
    <HYArtistWrapper>
      <div className="content wrap-v2">
        <HYArtistCategory />
      </div>
    </HYArtistWrapper>
  )
})
