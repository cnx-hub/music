import { Map } from 'immutable'

import { IActionTypes } from './contant'

const defaultState = Map<number | any[]>({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
})

interface IAction {
  type: IActionTypes
  categories?: any[]
  currentId?: number
  recommends?: any[]
  radios?: any[]
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId', action.currentId || 0)
    case IActionTypes.CHANGE_RADIOS:
      return state.set('radios', action.radios || [])
    case IActionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', action.categories || [])
    case IActionTypes.CHANGE_RECOMMENDS:
      return state.set('recommends', action.recommends || [])
    default:
      return state
  }
}
