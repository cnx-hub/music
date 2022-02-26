import React, { memo } from 'react'

import { HYArtistWrapper } from './style'
import HYArtistCategory from 'pages/discover/c-pages/artist/c-cpns/artist-category'
import HYArtistList from 'pages/discover/c-pages/artist/c-cpns/artist-list'

export default memo(function HYArtist() {
  return (
    <HYArtistWrapper>
      <div className="content wrap-v2">
        <HYArtistCategory />
        <HYArtistList />
      </div>
    </HYArtistWrapper>
  )
})
