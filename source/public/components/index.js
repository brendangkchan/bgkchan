import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title';
import Menu from './menu'
import Footer from './footer'
import GTM from './gtm'
import get from 'lodash.get'
import find from 'lodash.find'
import { StickyContainer } from 'react-sticky'
import {
	setImage,
	setProduct,
	markThumbnailsPreloaded,
	fetchCart,
	fetchAllProducts,
	fetchProduct,
	addProduct,
	updateLineItem,
	popupCartComplete
} from '../redux/action-creators'
import imageConfig from '../image-config'

class Index extends Component {
	constructor (props) {
		super(props)
		const pathname = get(this.props, 'location.pathname')
		const route = pathname.split('/').pop()
		const image = pathname.indexOf('work') > -1 &&
			find(imageConfig, { filename: route })

		this.state = {
			urlImage: image
		}
	}

	getRoute () {
		const pathname = get(this.props, 'location.pathname')
		const path = pathname.split('/').pop()
		let route = path
		if (path === '') {
			route = 'home'
		} else if (pathname.indexOf('work') > -1) {
			route = 'work'
		}
		return route
	}

	componentDidMount () {
		// Load the thumbnail for each piece on /work
		if (!this.props.images.preloadedThumbnails) {
			imageConfig.map((imageObject) => {
				let img = document.createElement('img');
				img.src = imageObject.thumbUrl
			})
			this.props.markThumbnailsPreloaded(true)
		}
		if (this.getRoute() !== 'shop') {
			this.props.fetchAllProducts()
		}
		this.props.fetchCart()
	}

	render () {
		const route = this.getRoute()
		const props = Object.assign({}, this.props, this.state, {
			image: this.props.images.image || this.state.urlImage
		})
		const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, props))

		return (
			<html>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width,initial-scale=1.0" />
					<meta name="description" content="Street art inspired products created by San Francisco artist." />
					<meta name="keywords" content="art, design, street art, graffiti, accessories, products, apparel, gallery" />
					<DocumentTitle title='Bgkchan Art | Home' />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
					<link rel="stylesheet" href="../css/base.css" />
					<link rel="icon" 
					      type="image/png" 
					      href="https://d2jk9tf9979qo8.cloudfront.net/signature-60.png"/>
					<script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
				</head>
				<body className={route}>
					<StickyContainer>
						<Menu { ...props }/>
						<div id="container">
							{ childrenWithProps }
						</div>
					</StickyContainer>
					<Footer />
					<script src="../scripts/bundle.js"></script>
					<GTM gtmId='GTM-MCFZLR2' />
				</body>
			</html>
		)
	}
}

const IndexState = (state) => {
	var stateJSON = JSON.stringify(state).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
	return {
		initialState: `window.__INITIAL_STATE__ = ${stateJSON}`,
		images: state.images,
		shopify: state.shopify
	}
}

export default connect(
	IndexState
,{
	setImage,
	setProduct,
	markThumbnailsPreloaded,
	fetchCart,
	fetchAllProducts,
	fetchProduct,
	addProduct,
	updateLineItem,
	popupCartComplete
})(Index)
