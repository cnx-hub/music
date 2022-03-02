import request from './axios'

export function getSongDetail(ids: number) {
  return request.get<any>({
    url: '/song/detail',
    params: { ids }
  })
}

export function getLyric(id: number) {
  return request.get<any>({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSimiPlaylist(id: number) {
  return request.get<any>({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}

export function getSimiSong(id: number) {
  return request.get<number>({
    url: '/simi/song',
    params: {
      id
    }
  })
}
