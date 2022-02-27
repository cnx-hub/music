import { Map } from 'immutable'

import { IActionTypes } from './constants'

const defaultState = Map<number | any[]>({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
})

interface IAction {
  type: IActionTypes
  hotAlbums?: any[]
  topAlbums?: any[]
  total?: number
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionTypes.CHANGE_HOT_ALBUMS:
      return state.set(
        'hotAlbums',
        action.hotAlbums || (defaultState.get('hotAlbums') as [])
      )
    case IActionTypes.CHANGE_TOP_ALBUMS:
      return state.set(
        'topAlbums',
        action.topAlbums ?? (defaultState.get('topAlbums') as [])
      )
    case IActionTypes.CHANGE_TOP_TOTAL:
      return state.set('topTotal', action.total || 0)
    default:
      return state
  }
}
