import request from './axios'

export function getTopList() {
  return request.get<any>({
    url: '/toplist'
  })
}

export function getRankingList(id: number) {
  return request.get<any>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
