import { Routes, Route, useNavigate } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import PublicRoutes from './components/PublicRoutes'
import { PATH } from './constants/common'
import AboutUsPage from './pages/AboutUsPage'
import ActivatePage from './pages/ActivatePage'
import ContactPage from './pages/ContactPage'
import DiscoverPage from './pages/DiscoverPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import MyClosetPage from './pages/MyClosetPage'
import OutfitDetailPage from './pages/OutfitDetailPage'
import ProfilePage from './pages/ProfilePage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route index exact path={PATH.EXPLORE} element={<LandingPage />} />
        <Route exact path={PATH.LOGIN} element={<LoginPage />} />
        <Route exact path={PATH.SIGNUP} element={<SignUpPage />} />
        <Route exact path={PATH.ACTIVATE} element={<ActivatePage />} />
        <Route
          exact
          path={PATH.FORGET_PASSWORD}
          element={<ForgetPasswordPage />}
        />
        <Route
          exact
          path={PATH.RESET_PASSWORD}
          element={<ResetPasswordPage />}
        />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route exact path={PATH.HOME} element={<HomePage />} />{' '}
        <Route exact path={PATH.ABOUT_US} element={<AboutUsPage />} />
        <Route exact path={PATH.CONTACT} element={<ContactPage />} />
        <Route exact path={PATH.OUTFIT_DETAIL} element={<OutfitDetailPage />} />
        <Route exact path={PATH.PROFILE} element={<ProfilePage />} />
        <Route exact path={PATH.MY_CLOSET} element={<MyClosetPage />} />
        <Route exact path={PATH.DISCOVER} element={<DiscoverPage />} />
      </Route>
    </Routes>
  )
}

export default App