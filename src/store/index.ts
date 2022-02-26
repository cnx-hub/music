import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

// composeWithDevTools 可以用 调试工查看redux中的状态
// applyMiddleware支持异步
const enhaner = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducer, enhaner)

export default store

export type rootState = ReturnType<typeof reducer>
