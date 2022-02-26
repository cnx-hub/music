import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { ArtistListWrapper } from './style'
import HYThemeHeaderNormal from 'components/theme-header-normal'
import HYAlphaList from './c-cpns/alpha-list'
import HYArtistItemV1 from './c-cpns/artist-item'

import type { rootState } from 'store'
import { IcurrentType } from '../../store/reducer'

export default memo(function HYArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector<
    rootState,
    { artistList: any[]; currentType: IcurrentType }
  >(
    (state) => ({
      currentType: fromJS(state).getIn([
        'artist',
        'currentType'
      ]) as IcurrentType,
      artistList: fromJS(state).getIn(['artist', 'artistList']) as any[]
    }),
    shallowEqual
  )

  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name} rightSlot={''} />
      <HYAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return (
            <HYArtistItemV1
              key={item.id}
              info={item}
              index={index}
            ></HYArtistItemV1>
          )
        })}
      </div>
    </ArtistListWrapper>
  )
})
