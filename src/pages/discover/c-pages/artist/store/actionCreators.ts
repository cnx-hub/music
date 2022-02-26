import { IArtist } from './contant'

import { getArtistList } from 'server/artist'

export const changeArtistListAction = (artistList: any[]) => ({
  type: IArtist.CHANGE_ARTIST_LIST,
  artistList
})

export const changeCurrentAreaAction = (area: number) => ({
  type: IArtist.CHANGE_CURRENT_AREA,
  currentArea: area
})

export const changeCurrentTypeAction = (type: {
  name: string
  type: number
}) => ({
  currentType: type,
  type: IArtist.CHANGE_CURRENT_TYPE
})

export const getArtistListAction = (
  area: number,
  type: number,
  alpha: string
) => {
  if (alpha === '热门') {
    alpha = '-1'
  } else if (alpha === '其他') {
    alpha = '0'
  }

  return (dispatch: any) => {
    getArtistList(area, type, alpha).then((res: any) => {
      console.log(res)
      dispatch(changeArtistListAction(res.artists))
    })
  }
}
