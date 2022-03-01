import React, { memo, useCallback, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'
import { useNavigate } from 'react-router-dom'

import { getRecommend } from '../../store/actionCreators'

import { RecommendWrapper } from './style'
import HYThemeHeaderRCM from 'components/theme-header-rcm'
import HYThemeCover from 'components/theme-cover'

import type { rootState } from 'store'

export default memo(function HYHotRecommend() {
  // redux
  const { recommends } = useSelector<rootState, { recommends: any[] }>(
    (state) => ({
      recommends: fromJS(state).getIn(['recommend', 'hotRecommends']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // router hooks
  const navigate = useNavigate()

  // hooks
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])

  const keywordClick = useCallback(
    (keyword: string) => {
      navigate('/discover/songs', {
        replace: false,
        state: { cat: keyword }
      })
    },
    [navigate]
  )
  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        moreLink={'/discover/songs'}
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        keywordClick={keywordClick}
      />
      <div className="recommend-list">
        {recommends.slice(0, 8).map((item) => {
          return <HYThemeCover info={item} key={item.id} right={''} />
        })}
      </div>
    </RecommendWrapper>
  )
})
