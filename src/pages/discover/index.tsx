import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

export default memo(function HYDiscover() {
  return (
    <div>
      HYDiscover
      <Outlet />
    </div>
  )
})
