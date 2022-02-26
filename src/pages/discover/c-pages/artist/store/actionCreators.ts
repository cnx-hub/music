import { IArtist } from './contant'

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

export const getArtistListAction = () => {}
