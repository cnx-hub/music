import React, { memo, useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import classNames from 'classnames'

import { scrollTo } from 'utils/ui-helper'

import { PannelWrapper } from './style'

export default memo(function HYLyricPanel() {
  const { currentLyrics, currentLyricIndex } = useSelector(
    (state) => ({
      currentLyrics: fromJS(state).getIn(['player', 'currentLyrics']) as any[],
      currentLyricIndex: fromJS(state).getIn([
        'player',
        'currentLyricIndex'
      ]) as number
    }),
    shallowEqual
  )

  // other hooks
  const panelRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(
      panelRef.current as HTMLDivElement,
      (currentLyricIndex - 3) * 32,
      300
    )
  }, [currentLyricIndex])

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {currentLyrics.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', {
                active: index === currentLyricIndex
              })}
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </PannelWrapper>
  )
})
