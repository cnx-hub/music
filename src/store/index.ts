import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const enhaner = composeWithDevTools(applyMiddleware(thunk))

// const store = createStore(enhaner)
