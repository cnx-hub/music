import { getRankingList, getTopList } from 'server/ranking'

import { IActionType } from './contant'

const changeTopListAction = (res: any) => ({
  type: IActionType.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res: any) => ({
  type: IActionType.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const changeCurrentIndex = (index: number) => ({
  type: IActionType.CHANGE_CURRENT_INDEX,
  currentIndex: index
})

export const getTop = () => {
  return (dispatch: any) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res))
    })
  }
}

export const getRanking = (id: number) => {
  return (dispatch: any) => {
    getRankingList(id).then((res: any) => {
      dispatch(changePlayListAction(res))
    })
  }
}
