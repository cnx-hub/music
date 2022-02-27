import { Map } from 'immutable'

import { IActionType } from './contant'

const defaultState = Map({
  category: [],
  currentCategory: '全部',
  categorySongs: {}
})

interface IAction {
  type: IActionType
  category?: any[]
  currentCategory?: string
  categorySongs?: any
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionType.CHANGE_CATEGORY:
      return state.set('category', action.category || [])
    case IActionType.CHANGE_CATEGORY_SONGS:
      return state.set('categorySongs', action.categorySongs || {})
    case IActionType.CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory || '全部')
    default:
      return state
  }
}
