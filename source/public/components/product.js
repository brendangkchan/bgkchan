import React, { Component } from 'react'
import find from 'lodash.find'
import get from 'lodash.get'
import capitalize from 'capitalize'
import Image from './image'
import imageConfig from '../image-config'
import DocumentTitle from 'react-document-title'
import Button from 'react-bootstrap/lib/Button'

class Product extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
	}

	render () {
		const product = get(this.props, 'shopify.product')
		const cart = get(this.props, 'shopify.cart')
		if (!product || !cart) {
			return false
		}
		console.log('product', product)

		// return (
	 //  	<div className='product_wrapper'>
	 //  		<DocumentTitle title={`Bgkchan Art | Shop ${capitalize(product.title)}`} />
	 //  	</div>
		// )

		return (
	  	<div className='product_wrapper'>
	  		<DocumentTitle title={`Bgkchan Art | Shop ${capitalize(product.title)}`} />
	  		<div className='product_image-wrapper'>
					<img className='product_image' src={product.images[0].src} alt={ product.title } />	
				</div>
				<div className='product_text-section product_mobile-title-section'>
					<div className='product_title'>{ product.title }</div>
					<div className='product_price'>{ `$${Math.round(product.variants[0].price)}` }</div>
				</div>
				<div className='product_text-section'>
					<div className='product_description' dangerouslySetInnerHTML={{ __html: product.description }} />
				</div>
				<div className='product_add-button-container'>
					<Button size='large' bsStyle="success" onClick={this.props.addProduct.bind(null, { cart, variant: product.variants[0], quantity: 1 })}>
						Add to cart
					</Button>
				</div>
	  	</div>
		)
	}
}

export default Product