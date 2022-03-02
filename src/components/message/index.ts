import { message } from 'antd'
import React from 'react'

interface MessageType extends PromiseLike<any> {
  (): void
}

interface ArgsProps {
  content: React.ReactNode
  duration?: number
  prefixCls?: string
  rootPrefixCls?: string
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  onClose?: () => void
  icon?: React.ReactNode
  key?: string | number
  style?: React.CSSProperties
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

type MessageApi = Omit<typeof message, 'open'> & {
  open: (args: ArgsProps) => MessageType
}

const Message: MessageApi = message as MessageApi

export { Message }
