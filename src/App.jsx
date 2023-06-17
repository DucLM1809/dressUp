import { Routes, Route, useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_ITEMS, PATH } from './constants/common'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    !localStorage.getItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN) &&
      navigate(PATH.LOGIN)
  }, [])

  return (
    <Routes>
      {!localStorage.getItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN) ? (
        <Route exact path={PATH.LOGIN} element={<LoginPage />} />
      ) : (
        <>
          <Route exact path={PATH.DISCOVER} element={<DiscoverPage />} />
          <Route exact path={PATH.PRODUCT} element={<ProductPage />} />
        </>
      )}
    </Routes>
  )
}

export default App
