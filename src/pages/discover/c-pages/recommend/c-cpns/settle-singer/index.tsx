import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getSettleSingers } from '../../store/actionCreators'
import { getSizeImage } from 'utils/format-utils'

import { SetterSongerWrapper } from './style'
import HYThemeHeaderSmall from 'components/theme-header-small'

import type { rootState } from 'store'

export default memo(function HYSettleSinger() {
  // redux
  const { settleSings } = useSelector<rootState, { settleSings: any[] }>(
    (state) => ({
      settleSings: fromJS(state).getIn(['recommend', 'settleSings']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    dispatch(getSettleSingers())
  }, [dispatch])

  return (
    <SetterSongerWrapper>
      <HYThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSings.map((item) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join('') || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
