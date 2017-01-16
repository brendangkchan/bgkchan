import { browserHistory } from 'react-router'
import ShopifyBuy from 'shopify-buy'
import actionTypes from './actions'
import * as Tracking from '../lib/tracking'

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

export function setProduct (product) {
	return dispatch => {
		browserHistory.push(`/shop/${product.title.toLowerCase().replace(/ /g, "-")}`);
		dispatch({
			type: actionTypes.SET_PRODUCT,
			product
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

export function popupCartComplete () {
	return {
		type: actionTypes.POPUP_CART_COMPLETE
	}
}

export function addProduct ({ cart, variant, quantity }) {
	return dispatch => {
		Tracking.addToCart({
			value: variant.price,
			currency: 'USD',
			contentName: variant.productTitle,
			contentType: 'product',
			contentIds: [variant.id]
		})

		cart.createLineItemsFromVariants({ variant, quantity })
			.then((cart) => {
  			dispatch({
  				type: actionTypes.SET_CART,
  				cart
  			})

  			dispatch({
  				type: actionTypes.POPUP_CART,
  				cart
  			})
			})
			.catch(e => console.log(e))
		}
}

export function updateLineItem ({ cart, lineItemId, quantity }) {
	return dispatch => {
		Tracking.updateCart({ quantity })

		cart.updateLineItem(lineItemId, quantity)
			.then((cart) => {
  			dispatch({
  				type: actionTypes.SET_CART,
  				cart
  			})
			})
			.catch(e => console.log(e))
		}
}
