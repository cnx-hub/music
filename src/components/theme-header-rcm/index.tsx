import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { HeaderWrapper } from './style'

interface IProps {
  title: string
  keywords: any[]
  moreLink: string
  keywordClick: (cat: string) => void
}

const HYThemeHeaderRCM = memo((props: React.PropsWithChildren<IProps>) => {
  const { title, keywords, keywordClick, moreLink } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={(e) => keywordClick(item)}>
                  {item}
                </span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="link">
          更多
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

export default HYThemeHeaderRCM
