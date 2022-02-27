import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fromJS } from 'immutable'

import { getRadios } from '../../store/actionCreators'

import { RankingWraper } from './style'
import HYThemeHeaderNormal from 'components/theme-header-normal'
import HYRadioRankingCover from 'components/radio-ranking-cover'
import HYPagination from 'components/pagination'

import type { rootState } from 'store'

export default memo(function HYRadioRanking() {
  // state
  const [currentPage, setCurrentPage] = useState(1)

  // redux
  const { currentId, radios } = useSelector<
    rootState,
    { currentId: number; radios: any[] }
  >(
    (state) => ({
      currentId: fromJS(state).getIn(['djradio', 'currentId']) as number,
      radios: fromJS(state).getIn(['djradio', 'radios']) as any[]
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId])

  // hanlde function
  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page)
    dispatch(getRadios(currentId, page * 30))
  }
  return (
    <RankingWraper>
      <HYThemeHeaderNormal title="电台排行榜" rightSlot="" />
      <div className="ranking-list">
        {radios.map((item) => {
          return <HYRadioRankingCover radio={item} key={item.id} />
        })}
      </div>
      <HYPagination
        current={currentPage}
        total={1000}
        pageSize={30}
        onChange={onPageChange}
      />
    </RankingWraper>
  )
})
