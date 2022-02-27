import request from './axios'

export function getHotAlbums() {
  return request.get<any>({
    url: '/album/newest'
  })
}

export function getTopAlbums(limit: number, offset: number) {
  return request.get<any>({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}
