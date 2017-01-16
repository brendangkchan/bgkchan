import * as FB from './fb'

export function completeRegistration () {
	try {
		FB.completeRegistration()	
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function viewContent (params) {
	try {
		FB.viewContent(params)
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function addToCart (params) {
	try {
		FB.addToCart(params)
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function updateCart (params) {
	try {
		FB.updateCart(params)
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function customEvent (params) {
	try {
		FB.customEvent(params)
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function pageView () {
	try {
		FB.pageView()
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}

export function initiateCheckout (params) {
	try {
		FB.initiateCheckout(params)
	} catch (e) {
		console.warn(`Error tracking: ${e.stack}`)
	}
}
