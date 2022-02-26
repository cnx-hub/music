import { combineReducers } from 'redux-immutable'

import { reducer as artistReducer } from 'pages/discover/c-pages/artist/store'

export default combineReducers({
  artist: artistReducer
})
