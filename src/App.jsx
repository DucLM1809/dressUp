import { Routes, Route, useNavigate } from 'react-router-dom'
import { PATH } from './constants/common'
import HomePage from './pages/HomePage'
import MyClosetPage from './pages/MyClosetPage'

function App() {
  return (
    <Routes>
      <Route exact path={PATH.HOME} element={<HomePage />} />
      <Route exact path={PATH.MY_CLOSET} element={<MyClosetPage />} />
    </Routes>
  )
}

export default App
