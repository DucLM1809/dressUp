import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
// import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>
)
