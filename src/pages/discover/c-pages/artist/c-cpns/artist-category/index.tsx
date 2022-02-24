import React, { memo } from 'react'

import { artistCategories } from 'server/local-data'

import { CategoryWrapper, CategoryItem } from './style'

import type { IArtists } from 'types/local-data'

export default memo(function HYArtistCategory() {
  // render jsx
  const renderArtist = (artists: IArtists[], area: number) => {
    return (
      <div>
        {artists.map((artist, index) => {
          return (
            <CategoryItem key={artist.name}>
              <span>{artist.name}</span>
            </CategoryItem>
          )
        })}
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        )
      })}
    </CategoryWrapper>
  )
})
