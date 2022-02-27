import React, { memo } from 'react'
import { Pagination, PaginationProps } from 'antd'

import { PaginationWrapper } from './style'

export default memo(function HYPagination(
  props: React.PropsWithChildren<PaginationProps>
) {
  const { current, total, onChange } = props

  // render function
  function itemRender(
    current: any,
    type: string,
    originalElement: React.ReactNode
  ) {
    if (type === 'prev') {
      return <button className="control prev">&lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">&gt; 下一页</button>
    }
    return originalElement
  }

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        defaultCurrent={1}
        current={current}
        total={total}
        pageSize={30}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onChange}
      />
    </PaginationWrapper>
  )
})
