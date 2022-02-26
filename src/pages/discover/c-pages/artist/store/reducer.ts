import { Map } from 'immutable'

import { IArtist } from './contant'

export interface IcurrentType {
  name: string
  type: number
}

const defaultState = Map<number | any[] | IcurrentType>({
  currentArea: 7,
  currentType: {
    name: '推荐歌手',
    type: 1
  },
  artistList: []
})

interface IAction {
  type: IArtist
  currentArea?: number
  currentType?: IcurrentType
  artistList?: any[]
}

function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IArtist.CHANGE_CURRENT_AREA:
      if (action.currentArea === 0) {
        return state.set('currentArea', 0)
      }
      return state.set(
        'currentArea',
        action.currentArea || (defaultState.get('currentArea') as number)
      )
    case IArtist.CHANGE_CURRENT_TYPE:
      return state.set(
        'currentType',
        action.currentType || (defaultState.get('currentType') as IcurrentType)
      )
    case IArtist.CHANGE_ARTIST_LIST:
      return state.set(
        'artistList',
        action.artistList || (defaultState.get('artistList') as [])
      )
    default:
      return state
  }
}

export default reducer
