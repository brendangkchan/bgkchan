// Load FB tracking
export function initFB () {
	!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
	document,'script','https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '304437813286657')
	fbq('track', 'PageView');
}

export function completeRegistration () {
	fbq('track', 'CompleteRegistration')
}

export function viewContent ({ value, currency, contentName, contentType, contentIds }) {
	fbq('track', 'ViewContent', {
		value,
		currency,
		content_name: contentName,
		content_type: contentType,
		content_ids: contentIds
	})
}

export function addToCart ({ value, currency, contentName, contentType, contentIds }) {
	fbq('track', 'AddToCart', {
		value,
		currency,
		content_name: contentName,
		content_type: contentType,
		content_ids: contentIds
	})
}

export function updateCart ({ quantity }) {
	fbq('trackCustom', 'UpdateCart', { quantity })
}

export function customEvent ({ event, ...params }) {
	fbq('trackCustom', event, params)
}

export function pageView () {
	fbq('track', 'PageView')
}

export function initiateCheckout ({ value, currency, contentName, contentIds, contentType, numItems }) {
	fbq('track', 'InitiateCheckout', {
		value,
		currency,
		content_name: contentName,
		content_ids: contentIds,
		content_type: contentType,
		num_items: numItems
	})
}
