import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from 'server/djradio'

import { IActionTypes } from '../store/contant'

const changeCategoryAction = (res: any) => ({
  type: IActionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})

const changeRecommendsAction = (res: any) => ({
  type: IActionTypes.CHANGE_RECOMMENDS,
  recommends: res.djRadios
})

const changeRadiosAction = (res: any) => ({
  type: IActionTypes.CHANGE_RADIOS,
  radios: res.djRadios
})

export const changeCurrentIdActio = (id: number) => ({
  type: IActionTypes.CHANGE_CURRENT_ID,
  currentId: id
})

export const getRadioCategories = () => {
  return (dispatch: any) => {
    getDjRadioCatelist().then((res) => {
      dispatch(changeCategoryAction(res))
      const currentId = res.categories[0].id
      dispatch(changeCurrentIdActio(currentId))
    })
  }
}

export const getRadioRecommend = (currentId: number) => {
  return (dispatch: any) => {
    getDjRadioRecommend(currentId).then((res) => {
      dispatch(changeRecommendsAction(res))
    })
  }
}

export const getRadios = (currentId: number, offset: number) => {
  return (dispatch: any) => {
    getDjRadios(currentId, 30, offset).then((res) => {
      dispatch(changeRadiosAction(res))
    })
  }
}
