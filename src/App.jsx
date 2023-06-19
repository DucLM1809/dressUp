import { Routes, Route, useNavigate } from 'react-router-dom'
import { PATH } from './constants/common'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route exact path={PATH.LOGIN} element={<LoginPage />} />
      <Route exact path={PATH.HOME} element={<HomePage />} />
      <Route exact path={PATH.DISCOVER} element={<DiscoverPage />} />
      <Route exact path={PATH.PRODUCT} element={<ProductPage />} />
    </Routes>
  )
}

export default App
