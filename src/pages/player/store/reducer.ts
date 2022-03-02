import { Map } from 'immutable'
import { IActionType } from './contant'

import { player } from 'server/local-data'

const defaultState = Map({
  playList: player.playList,
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环,
  currentSongIndex: 1,
  currentSong: player.currentSong,
  currentLyrics: [],
  simiPlaylist: [],
  simiSongs: [],
  currentLyricIndex: -1
})

interface IAction {
  type: IActionType
  playList?: string
  sequence?: number // 0 顺序播放 1 随机播放 2 单曲循环,
  songIndex?: number
  song?: any
  lyrics?: any[]
  simiPlaylist?: any[]
  simiSongs?: any[]
  lyricIndex?: number
}

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case IActionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.song)
    case IActionType.CHANGE_LYRICS:
      return state.set('currentLyrics', action.lyrics)
    case IActionType.CHANGE_SIMI_PLAYLIST:
      return state.set('simiPlaylist', action.simiPlaylist)
    case IActionType.CHANGE_SIMI_SONGS:
      return state.set('simiSongs', action.simiSongs)
    case IActionType.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case IActionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.songIndex)
    case IActionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.lyricIndex)
    case IActionType.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.sequence)
    default:
      return state
  }
}
