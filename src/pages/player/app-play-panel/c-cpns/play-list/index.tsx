import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'

import { formatMinuteSecond } from 'utils/format-utils'

import { PlayListWrapper } from './style'

import type { rootState } from 'store'

export default memo(function HYPlayList() {
  // redux
  const { playList, currentSongIndex } = useSelector<
    rootState,
    { playList: any[]; currentSongIndex: number }
  >(
    (state) => ({
      playList: fromJS(state).getIn(['player', 'playList']) as any[],
      currentSongIndex: fromJS(state).getIn([
        'player',
        'currentSongIndex'
      ]) as number
    }),
    shallowEqual
  )
  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames('play-item', {
              active: currentSongIndex === index
            })}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
})
