import request from './axios'

export function getDjRadioCatelist() {
  return request.get<any>({
    url: '/dj/catelist'
  })
}

export function getDjRadioRecommend(type: number) {
  return request.get<any>({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

export function getDjRadios(cateId: number, limit: number, offset: number) {
  return request.get<any>({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}
