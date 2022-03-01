import { IActionType } from './contant'

import {
  getArtistList,
  getHotRecommend,
  getNewAlbum,
  getTopBanner,
  getTopList
} from 'server/recommend'

const changeBannerAction = (res: any) => ({
  type: IActionType.CHANGE_TOP_BNNAER,
  banners: res.banners
})

const changeRecommendAction = (res: any) => ({
  type: IActionType.CHANGE_HOT_RECOMMEND,
  recommends: res.result
})

const changeNewAlbumAction = (res: any) => ({
  type: IActionType.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

export const getBanner = () => {
  return (dispatch: any) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res))
    })
  }
}

export const getRecommend = () => {
  return (dispatch: any) => {
    getHotRecommend().then((res) => {
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getAlbum = () => {
  return (dispatch: any) => {
    getNewAlbum(10, 0).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
