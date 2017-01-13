import React, { Component } from 'react'
import find from 'lodash.find'
import get from 'lodash.get'
import capitalize from 'capitalize'
import Image from './image'
import imageConfig from '../image-config'
import DocumentTitle from 'react-document-title'
import Button from 'react-bootstrap/lib/Button'
import classnames from 'classnames'

class Product extends Component {
	constructor (props) {
		super(props)
		this.setFeaturedIndex = this.setFeaturedIndex.bind(this)
		this.state = {
			featuredIndex: 0
		}
	}

	setFeaturedIndex (index) {
		this.setState({ featuredIndex: index })
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

		return (
	  	<div className='product_wrapper'>
	  		<DocumentTitle title={`Bgkchan Art | Shop ${capitalize(product.title)}`} />
	  		<div className='product_image-wrapper'>
					<img className='product_image' src={product.images[this.state.featuredIndex].src} alt={product.title} />
					<div className='product_image-thumbnails'>
						{
							product.images.map((image, index) =>
								<img
									className={classnames('product_image-thumbnail', { 'featured': index === this.state.featuredIndex })}
									src={image.src}
									alt={`${product.title} alternate image ${index}`}
									key={index}
									onClick={this.setFeaturedIndex.bind(null, index)}
								/>
							)
						}
					</div>
				</div>
				<div className='product_text-wrapper'>
					<div className='product_text-section product_mobile-title-section'>
						<h1 className='product_title'>{ product.title }</h1>
						<div className='product_price'>{ `$${Math.round(product.variants[0].price)}` }</div>
						<div className='product_add-button-container'>
							<Button size='large' bsStyle="success" onClick={this.props.addProduct.bind(null, { cart, variant: product.variants[0], quantity: 1 })}>
								Add to cart
							</Button>
						</div>
					</div>
					<div className='product_text-section product_description-wrapper'>
						<div className='product_description' dangerouslySetInnerHTML={{ __html: product.description }} />
					</div>
				</div>
	  	</div>
		)
	}
}

export default Product