import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'
import { artistCategories } from 'server/local-data'

import { CategoryWrapper, CategoryItem } from './style'
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction
} from '../../store/actionCreators'

import type { IArtists } from 'types/local-data'
import type { rootState } from 'store'
import type { IcurrentType } from 'pages/discover/c-pages/artist/store/reducer'

export default memo(function HYArtistCategory() {
  // redux hooks
  const { currentArea, currentType } = useSelector<
    rootState,
    { currentArea: number; currentType: IcurrentType }
  >(
    (state) => ({
      currentArea: fromJS(state).getIn(['artist', 'currentArea']) as number,
      currentType: fromJS(state).getIn([
        'artist',
        'currentType'
      ]) as IcurrentType
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // handle function
  const selectArtist = (area: number, type: IcurrentType) => {
    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentTypeAction(type))
  }
  // render jsx
  const renderArtist = (artists: IArtists[], area: number) => {
    return (
      <div>
        {artists.map((artist) => {
          const isSelect =
            currentArea === area && currentType.type === artist.type
          return (
            <CategoryItem
              key={artist.name}
              className={classNames({ active: isSelect })}
            >
              <span
                onClick={() =>
                  selectArtist(area, { name: artist.name, type: artist.type })
                }
              >
                {' '}
                {artist.name}
              </span>
            </CategoryItem>
          )
        })}
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {artistCategories.map((item) => {
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
