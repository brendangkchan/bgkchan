import { browserHistory } from 'react-router'
import ShopifyBuy from 'shopify-buy'
import actionTypes from './actions'

const shopifyClient = ShopifyBuy.buildClient({
  domain: 'bgkchan-art.myshopify.com',
  apiKey: '347eadb784162e307c7b112f5177520b',
  appId: '6',
})

export function setImage (image) {
	return dispatch => {
		browserHistory.push(`/work/${image.filename}`);
		dispatch({
			type: actionTypes.SET_IMAGE,
			image
		})
	}
}

export function markThumbnailsPreloaded (status) {
	return {
		type: actionTypes.MARK_THUMBNAILS_PRELOADED,
		status
	}
}

export function fetchProduct ({ productId }) {
	return dispatch => {
		shopifyClient.fetchProduct(productId)
			.then((product) => {
  			dispatch({
  				type: actionTypes.SET_PRODUCT,
  				product
  			})
			})
			.catch(e => console.log(e))
		}
}

export function fetchAllProducts () {
	return dispatch => {
		shopifyClient.fetchAllProducts()
			.then((products) => {
  			dispatch({
  				type: actionTypes.SET_PRODUCTS,
  				products
  			})
			})
			.catch(e => console.log(e))
		}
}

export function fetchCart () {
	return dispatch => {
	  shopifyClient.fetchRecentCart()
	    .then((cart) => {
	    	dispatch({
	    		type: actionTypes.SET_CART,
	    		cart
	    	})
	    })
	    .catch(e => console.log(e))
	}
}

export function addProduct ({ cart, variant, quantity }) {
	return dispatch => {
		cart.createLineItemsFromVariants({ variant, quantity })
			.then((cart) => {
  			dispatch({
  				type: actionTypes.SET_CART,
  				cart
  			})
			})
			.catch(e => console.log(e))
		}
}
