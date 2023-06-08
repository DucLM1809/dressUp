import { combineReducers } from '@reduxjs/toolkit'
import priceStore from './price.store'

const rootReducer = combineReducers({
  price: priceStore
})

export default rootReducer
