import React, { memo, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import { NavLink } from 'react-router-dom'

import {
  changePlaySongAction,
  changePlaySequenceAction
} from '../store/actionCreators'
import { formatMinuteSecond } from 'utils/format-utils'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd'

import type { rootState } from 'store'

export default memo(function HYAppPlaybar() {
  // state
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  // redux
  // redux hooks
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence
  } = useSelector<
    rootState,
    {
      currentSong: any
      currentLyrics: any[]
      currentLyricIndex: number
      playList: any
      playSequence: number
    }
  >(
    (state) => ({
      currentSong: fromJS(state).getIn(['player', 'currentSong']),
      currentLyrics: fromJS(state).getIn(['player', 'currentLyrics']) as any[],
      currentLyricIndex: fromJS(state).getIn([
        'player',
        'currentLyricIndex'
      ]) as number,
      playList: fromJS(state).getIn(['player', 'playList']),
      playSequence: fromJS(state).getIn(['player', 'playSequence']) as number
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他业务
  const play = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // 滚动条
  const sliderChange = useCallback(
    (value: number) => {
      setProgress(value)
      const time = ((value / 100.0) * duration) / 1000
      setCurrentTime(time)
      setIsChanging(true)
    },
    [duration]
  )

  const sliderAfterChange = useCallback((value) => {
    const time = ((value / 100.0) * duration) / 1000
    setCurrentTime(time)
    setIsChanging(false)
  }, [])
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={(e) => dispatch(changePlaySongAction(-1))}
          ></button>
          <button className="sprite_playbar btn play"></button>
          <button
            className="sprite_playbar btn next"
            onClick={(e) => dispatch(changePlaySongAction(1))}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) =>
                dispatch(changePlaySequenceAction(playSequence + 1))
              }
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={(e) => setShowPanel(!showPanel)}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
