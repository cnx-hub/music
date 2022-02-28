import { IActionType, PER_PAGE_NUMBER } from './contant'

import { getSongCategory, getSongCategoryList } from 'server/songs'

import { handleSongsCategory } from 'utils/handle-data'

const changeCategoryAction = (res: any) => ({
  type: IActionType.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = (res: any) => ({
  type: IActionType.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const changeCurrentCategoryAction = (name: string) => ({
  type: IActionType.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getCategory = () => {
  return (dispatch: any) => {
    getSongCategory().then((res) => {
      const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getSongList = (page: number) => {
  return (dispatch: any, getState: any) => {
    // 1.获取currentCategory
    const name = getState().getIn(['songs', 'currentCategory'])
    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then((res) => {
      dispatch(changeSongListAction(res))
    })
  }
}
