import { combineReducers } from 'redux-immutable'

import { reducer as artistReducer } from 'pages/discover/c-pages/artist/store'
import { reducer as albumReducer } from 'pages/discover/c-pages/album/store'
import { reducer as djradioReducer } from 'pages/discover/c-pages/djradio/store'
import { reducer as songsReducer } from 'pages/discover/c-pages/songs/store'

export default combineReducers({
  artist: artistReducer,
  album: albumReducer,
  djradio: djradioReducer,
  songs: songsReducer
})
