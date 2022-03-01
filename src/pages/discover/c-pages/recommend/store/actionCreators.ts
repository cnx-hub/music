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

export const getBanner = () => {
  return (dispatch: any) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res))
    })
  }
}
