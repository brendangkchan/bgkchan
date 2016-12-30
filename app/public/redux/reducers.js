import clone from 'lodash.clonedeep'
import actionTypes from './actions'

const reducer = (state = {}, action) => {
  let newState = clone(state)
  switch(action.type) {
    case actionTypes.SET_IMAGE:
      newState = Object.assign(newState, { image: action.image })
      break
    case actionTypes.MARK_THUMBNAILS_PRELOADED:
      newState = Object.assign(newState, { preloadedThumbnails: action.status })
      break
    default:
    	break
  }
  return newState;
}

export default reducer