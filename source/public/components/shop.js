import React, { Component } from 'react'
import Menu from './menu'
// import SignupForm from './signup-form'
// import FormControl from 'react-bootstrap/lib/FormControl'
// import Button from 'react-bootstrap/lib/Button'
import DocumentTitle from 'react-document-title'
import ProductTile from './product-tile'

class Shop extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
		if (!this.props.shopify.products) {
			this.props.fetchAllProducts()
		}
	}
	
	render () {
		if (!this.props.shopify.products) {
			return false
		}

		const products = this.props.shopify.products
			.map((product, index) => 
				<ProductTile product={product} key={index} setProduct={this.props.setProduct}/>)

		return (
	  	<div className='shop_wrapper'>
	  		<DocumentTitle title='Bgkchan Art | Shop' />
				<div className='shop_content'>
					<div className='shop_product-tiles'>
						{ products }
					</div>
		    </div>
			</div>
		)
	}
}

// <div className='background' />
// <div className='coming-soon'>
// 	<h2 className='coming-soon_header'>Coming 2017</h2>
// 	<h3 className='coming-soon_subheader'>subscribe to get exclusive discounts and updates on new art products!</h3>
// </div>
// <SignupForm />

export default Shop