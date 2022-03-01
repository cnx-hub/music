import { Map } from 'immutable'
import { IActionType } from './contant'

const defaultState = Map<any | any[]>({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSings: []
})

interface IAction {
  type: IActionType
  banners?: any[]
  recommends?: any[]
  newAlbum?: any[]
  topUpList?: any
  topNewList?: any
  topOriginList?: any
  settleSings?: any[]
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionType.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case IActionType.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    case IActionType.CHANGE_NEW_LIST:
      return state.set('topNewList', action.topNewList)
    case IActionType.CHANGE_ORIGIN_LIST:
      return state.set('topOriginList', action.topOriginList)
    case IActionType.CHANGE_TOP_BNNAER:
      return state.set('topBanners', action.banners)
    case IActionType.CHANGE_UP_LIST:
      return state.set('topUpList', action.topUpList)
    case IActionType.CHANGE_SETTLE_SONGER:
      return state.set('settleSings', action.settleSings)
    default:
      return state
  }
}
