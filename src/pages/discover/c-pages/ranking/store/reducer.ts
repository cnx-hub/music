import { Map } from 'immutable'

import { IActionType } from './contant'

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  playList: {}
})

interface IAction {
  type: IActionType
  topList?: any[]
  currentIndex?: number
  playList?: any
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionType.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.currentIndex || 0)
    case IActionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList || {})
    case IActionType.CHANGE_TOP_LIST:
      return state.set('topList', action.topList || [])
  }
}
