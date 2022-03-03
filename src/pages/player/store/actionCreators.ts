import { fromJS } from 'immutable'
import { IActionType } from './contant'

import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong
} from 'server/player'
import { parseLyric } from 'utils/lrc-parse'
// 改变当前歌曲的index
const changeCurrentSongIndexAction = (index: number) => ({
  type: IActionType.CHANGE_CURRENT_SONG_INDEX,
  songIndex: index
})
// 改变当前歌曲
const changeCurrentSongAction = (song: any) => ({
  type: IActionType.CHANGE_CURRENT_SONG,
  song
})
// 改变歌词
const changeLyricsAction = (lyrics: any) => ({
  type: IActionType.CHANGE_LYRICS,
  lyrics
})
// 改变歌曲列表
const changePlayListAction = (playList: any) => ({
  type: IActionType.CHANGE_PLAY_LIST,
  playList: playList
})
// 改变歌词的index
export const changeCurrentLyricIndexAction = (index: number) => ({
  type: IActionType.CHANGE_CURRENT_LYRIC_INDEX,
  lyricIndex: index
})

const changeSimiPlaylistAction = (res: any) => ({
  type: IActionType.CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res: any) => ({
  type: IActionType.CHANGE_SIMI_SONGS,
  simiSongs: res.songs
})

// 加载歌曲
export const getSongDetailAction = (ids: number) => {
  return (dispatch: any, getState: any) => {
    // 1.判断是否歌曲存在playList中
    const playList = fromJS(getState()).getIn(['player', 'playList']) as any

    const songIndex = playList.findIndex((song: any) => song.id === ids)
    if (songIndex !== -1) {
      // 找到数据
      const currentSong = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changeCurrentSongAction(currentSong))
    } else {
      // 找不到数据
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 1.添加到playList中
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        // 2.改变当前index
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }

    // 获取当前的歌词,并且解析
    getLyric(ids).then((res) => {
      const lrcString = res.lrc.lyric
      const lyrics = parseLyric(lrcString)
      dispatch(changeLyricsAction(lyrics))
    })
  }
}
// 改变歌曲的播放模式
export const changePlaySequenceAction = (currentSequence: number) => {
  if (currentSequence === 3) currentSequence = 0
  return {
    type: IActionType.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence
  }
}
// 切换歌曲
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

export const getSimiPlaylistAction = () => {
  return (dispatch: any, getState: any) => {
    const id = getState().getIn(['player', 'currentSong']).id
    if (!id) return

    getSimiPlaylist(id).then((res) => {
      dispatch(changeSimiPlaylistAction(res))
    })
  }
}

export const getSimiSongAction = () => {
  return (dispatch: any, getState: any) => {
    const id = getState().getIn(['player', 'currentSong']).id
    if (!id) return

    getSimiSong(id).then((res) => {
      dispatch(changeSimiSongsAction(res))
    })
  }
}
