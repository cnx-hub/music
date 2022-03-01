import request from './axios'

export function getTopBanner() {
  return request.get<any>({
    url: '/banner'
  })
}

export function getHotRecommend() {
  return request.get<any>({
    url: '/personalized'
  })
}

export function getNewAlbum(limit: number, offset: number) {
  return request.get<any>({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(idx: number) {
  return request.get<any>({
    url: '/top/list',
    params: {
      idx
    }
  })
}

export function getArtistList(limit: number, cat: string) {
  return request.get<any>({
    url: '/artist/list',
    params: {
      cat,
      limit
    }
  })
}
