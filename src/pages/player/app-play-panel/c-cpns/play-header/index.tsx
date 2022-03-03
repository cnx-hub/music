import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import type { rootState } from 'store'

export default memo(function HYPlayHeader() {
  const { playList, currentSong } = useSelector<
    rootState,
    { playList: any; currentSong: any }
  >(
    (state) => ({
      playList: fromJS(state).getIn(['player', 'playList']),
      currentSong: fromJS(state).getIn(['player', 'currentSong'])
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </HeaderWrapper>
  )
})
