import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { HeaderWrapper } from './style'

import type { rootState } from 'store'

export default memo(function HYThemeHeaderSong() {
  // redux
  const { playList } = useSelector<rootState, { playList: any }>(
    (state) => ({
      playList: fromJS(state).getIn(['ranking', 'playList'])
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
