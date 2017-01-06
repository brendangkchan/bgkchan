import { combineReducers } from 'redux'
import clone from 'lodash.clonedeep'
import actionTypes from './actions'

const images = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SET_IMAGE:
      return Object.assign({}, state, { image: action.image })
    case actionTypes.MARK_THUMBNAILS_PRELOADED:
      return Object.assign({}, state, { preloadedThumbnails: action.status })
    default:
    	return state
  }
}

export function getInitialShopifyState () {
  return {
    product: null,
    products: null,
    cart: null
  }
}

const shopify = (state = {}, action) => {
  let newState = clone(state)
  switch(action.type) {
    case actionTypes.SET_PRODUCT:
      return Object.assign(newState, { product: action.product })
    case actionTypes.SET_PRODUCTS:
      return Object.assign(newState, { products: action.products })
    case actionTypes.SET_CART:
      return Object.assign(newState, { cart: action.cart })
    default:
      return state
  }
}

export default combineReducers({
  images,
  shopify
})