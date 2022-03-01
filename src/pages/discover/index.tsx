import React, { memo } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import { dicoverMenu } from 'server/local-data'

import { DiscoverWrapper, TopMenu } from './styled'

export default memo(function HYDiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {/* 嵌套路由 占位置 */}
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <Outlet />
      </div>
    </DiscoverWrapper>
  )
})
