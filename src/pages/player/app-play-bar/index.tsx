import React, { memo, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import { NavLink } from 'react-router-dom'

import {
  changePlaySongAction,
  changePlaySequenceAction,
  changeCurrentLyricIndexAction,
  getSongDetailAction
} from '../store/actionCreators'
import { formatMinuteSecond, getPlayUrl } from 'utils/format-utils'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd'
import { Message } from 'components/message'

import type { rootState } from 'store'
import { useEffect } from 'react'

export default memo(function HYAppPlaybar() {
  // state
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
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

  // hooks
  // 默认加载的歌曲
  const audioRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  // 初始化音频
  useEffect(() => {
    ;(audioRef.current as HTMLAudioElement).src = getPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
      })
    setDuration(currentSong.dt)
  }, [currentSong])

  // 其他业务
  const play = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          setIsPlaying(false)
        })
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
  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000
      ;(audioRef.current as HTMLAudioElement).currentTime = time
      setCurrentTime(time)
      setIsChanging(false)

      if (!isPlaying) {
        play()
      }
    },
    [duration, isPlaying, play]
  )
  //音频播放
  const timeUpdate = (e: any) => {
    const currentTime = e.target.currentTime

    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    const lrcLength = currentLyrics.length
    let i = 0
    for (; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time
      if (currentTime * 1000 < lrcTime) {
        break
      }
    }
    const finalIndex = i - 1
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex))
      Message.open({
        content: currentLyrics[finalIndex].content,
        key: 'lyric',
        duration: 0,
        className: 'lyric-message'
      })
    }
  }
  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      ;(audioRef.current as HTMLAudioElement).currentTime = 0
      audioRef.current?.play()
    } else {
      dispatch(changePlaySongAction(1))
    }
  }

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={(e) => dispatch(changePlaySongAction(-1))}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => play()}
          ></button>
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
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
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
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={timeEnded}
      ></audio>
    </PlaybarWrapper>
  )
})
