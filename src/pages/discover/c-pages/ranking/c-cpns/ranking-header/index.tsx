import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { formatMonthDay } from 'utils/format-utils'

import { RankingHeaderWrapper } from './style'
import HYSongOperationBar from 'components/song-operation-bar'

import type { rootState } from 'store'

export default memo(function HYRankingHeader() {
  // redux
  const { playList } = useSelector<rootState, { playList: any }>(
    (state) => ({
      playList: fromJS(state).getIn(['ranking', 'playList']) as any
    }),
    shallowEqual
  )

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{'每日更新:TODO'}）</div>
        </div>
        <HYSongOperationBar
          favorTitle={`(${playList.subscribedCount})`}
          downloadTitle="下载"
          commentTitle={`(${playList.commentCount})`}
          shareTitle={`(${playList.shareCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})
