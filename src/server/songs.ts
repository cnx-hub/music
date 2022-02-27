import request from './axios'

export function getSongCategory() {
  return request.get<any>({
    url: '/playlist/catlist'
  })
}

export function getSongCategoryList(cat = '全部', offset = 0, limit = 35) {
  return request.get<any>({
    url: '/top/playlist',
    params: {
      cat,
      offset,
      limit
    }
  })
}
