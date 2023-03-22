export const LOCAL_STORAGE_ITEMS = Object.freeze({
  ACCESS_TOKEN: 'accessToken'
})

export const PATH = Object.freeze({
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/',
  EXPLORE: '/explore',
  ABOUT_US: '/about-us',
  CONTACT: '/contact',
  OUTFIT_DETAIL: '/outfit-detail',
  MY_CLOSET: '/my-closet',
  NOT_FOUND: '*',
  FORBIDDEN: '/forbidden',
  FORGET_PASSWORD: '/forget-password',
  RESET_PASSWORD: '/reset-password/:id/:token',
  ACTIVATE_ACCOUNT: '/users/:id/verify/:token',
  PROFILE: '/profile'
})
