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
  PRICING: '/pricing'
})

export const EditorTabs = [
  {
    name: 'filepicker',
    icon: fileIcon
  }
]
