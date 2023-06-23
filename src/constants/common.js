import fileIcon from '../assets/file.png'
import ai from '../assets/ai.png'

export const LOCAL_STORAGE_ITEMS = Object.freeze({
  ACCESS_TOKEN: 'accessToken'
})

export const PATH = Object.freeze({
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  EXPLORE: '/',
  ABOUT_US: '/about-us',
  CONTACT: '/contact',
  OUTFIT_DETAIL: '/outfit-detail/:id',
  OUTFIT_BUILDER: '/outfit-builder',
  MY_CLOSET: '/my-closet',
  DISCOVER: '/discover',
  NOT_FOUND: '*',
  ACTIVATE: '/users/activate',
  FORBIDDEN: '/forbidden',
  FORGET_PASSWORD: '/forget-password',
  RESET_PASSWORD: '/users/reset-password',
  PROFILE: '/profile',
  PRICING: '/pricing',
  PRICING_INFO: '/pricing/info',
  BLOG: '/blog',
  BLOG_DETAIL: '/blog/:id'
})

export const routes = [
  { title: 'HomePage', path: PATH.HOME },
  { title: 'SignUpPage', path: PATH.SIGNUP },
  { title: 'LoginPage', path: PATH.LOGIN },
  { title: 'AboutUsPage', path: PATH.ABOUT_US },
  { title: 'ContactPage', path: PATH.CONTACT },
  { title: 'OutfitDetailPage', path: PATH.OUTFIT_DETAIL },
  { title: 'OutfitBuilderPage', path: PATH.OUTFIT_BUILDER },
  { title: 'ProfilePage', path: PATH.PROFILE },
  { title: 'DiscoverPage', path: PATH.DISCOVER },
  { title: 'PricingPage', path: PATH.PRICING },
  { title: 'PricingInfoPage', path: PATH.PRICING_INFO },
  { title: 'BlogPage', path: PATH.BLOG },
  { title: 'BlogDetailPage', path: PATH.BLOG_DETAIL },
  { title: 'ActivatePage', path: PATH.ACTIVATE },
  { title: 'ForgetPasswordPage', path: PATH.FORGET_PASSWORD },
  { title: 'ResetPasswordPage', path: PATH.RESET_PASSWORD }
]

export const EditorTabs = [
  {
    name: 'filepicker',
    icon: fileIcon
  }
]
