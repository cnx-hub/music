import React from 'react'
import HYMain from 'pages/main'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYMain />
      </BrowserRouter>
    </Provider>
  )
}

export default App
