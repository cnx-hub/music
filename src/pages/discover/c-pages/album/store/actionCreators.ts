import { IActionTypes } from './constants'
import { getHotAlbums, getTopAlbums } from 'server/albums'

const changeHotAlbumsAction = (res: any) => ({
  type: IActionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})

const changeTopAlbumAction = (res: any) => ({
  type: IActionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})

const changeTopTotalAction = (total: number) => ({
  type: IActionTypes.CHANGE_TOP_TOTAL,
  total: total
})

export const getHotAlbumsAction = () => {
  return (disaptch: any) => {
    getHotAlbums().then((res: any) => {
      disaptch(changeHotAlbumsAction(res))
    })
  }
}

export const getTopAlbumsAction = (page: number) => {
  return (disaptch: any) => {
    getTopAlbums(30, (page - 1) * 30).then((res) => {
      disaptch(changeTopAlbumAction(res))
      disaptch(changeTopTotalAction(res.total))
    })
  }
}
