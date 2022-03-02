import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { changePlaySongAction } from '../store/actionCreators'

import { PlaybarWrapper, Control } from './style'

export default memo(function HYAppPlaybar() {
  // state
  const [isPlaying, setIsPlaying] = useState(false)

  // redux
  const dispatch = useDispatch()
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
      </div>
    </PlaybarWrapper>
  )
})
