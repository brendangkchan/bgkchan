import React, { Component } from 'react'
import find from 'lodash.find'
import get from 'lodash.get'
import capitalize from 'capitalize'
import Image from './image'
import imageConfig from '../image-config'
import DocumentTitle from 'react-document-title'

class Product extends Component {
	constructor (props) {
		super(props)
		this.setFeatured = this.setFeatured.bind(this)
		this.state = {
			featuredIndex: null
		}
	}

	setFeatured (index) {
		this.setState({ featuredIndex: index })
	}

	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
	}

	render () {
		const { product } = this.props
		if (!product) {
			return false
		}

		return (
	  	<div className='product_wrapper'>
	  		<DocumentTitle title={`Bgkchan Art | ${capitalize('')}`} />
  			<div id='product-component-7909678539'></div>	
	  	</div>
		)

		// return (
	 //  	<div className='product_wrapper'>
	 //  		<DocumentTitle title={`Bgkchan Art | ${capitalize(product.title)}`} />
	 //  		<div className='product_image'>
	 //  			<ImageCarousel image={image} onClick={this.setImage} />
  // 			</div>
  // 			<div id='product-component-38b765fd837'></div>	
	 //  		<div className='product_text'>
		//   		<h3 className='product_title'>{image.title}</h3>
		// 			<h4 className='product_date'>{image.date}</h4>
		// 			<p className='product_description'>{image.description}</p>
		// 		</div>
	 //  	</div>
		// )
	}
}

export default Product