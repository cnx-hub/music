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
