import { IActionType } from './contant'

import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong
} from 'server/player'
import { parseLyric } from 'utils/lrc-parse'

const changeCurrentSongIndexAction = (index: number) => ({
  type: IActionType.CHANGE_CURRENT_SONG_INDEX,
  songIndex: index
})

const changeCurrentSongAction = (song: any) => ({
  type: IActionType.CHANGE_CURRENT_SONG,
  song
})

const changeLyricsAction = (lyrics: any) => ({
  type: IActionType.CHANGE_LYRICS,
  lyrics
})

export const changePlaySongAction = (tag: number) => {
  return (dispatch: any, getState: any) => {
    // 1.获取当前的index
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const playSequence = getState().getIn(['player', 'playSequence'])
    const playList = getState().getIn(['player', 'playList'])

    // 2.判断当前播放列表
    switch (playSequence) {
      case 1:
        currentSongIndex = Math.floor(Math.random() * playList.length)
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex === playList.length) currentSongIndex = 0
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1
    }

    // 3.处理修改数据
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(currentSong))

    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then((res) => {
      const lrcString = res.lrc.lyric
      const lyrics = parseLyric(lrcString)
      dispatch(changeLyricsAction(lyrics))
    })
  }
}
