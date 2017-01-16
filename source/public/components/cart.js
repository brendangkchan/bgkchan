import React, { Component } from 'react'
import { Link } from 'react-router'
import { Sticky } from 'react-sticky'
import classnames from 'classnames'
import Button from 'react-bootstrap/lib/Button'
import get from 'lodash.get'
import Quantity from './quantity'
import * as Tracking from '../lib/tracking'

class Cart extends Component {
	constructor (props) {
		super(props)
		this.checkout = this.checkout.bind(this)
		this.trackCheckout = this.trackCheckout.bind(this)
	}

	checkout () {
		const cart = get(this.props, 'shopify.cart')
		this.trackCheckout()
		window.open(cart.checkoutUrl, '_blank')
	}

	trackCheckout () {
		const cart = get(this.props, 'shopify.cart')
		if (cart) {
			Tracking.initiateCheckout({
				value: cart.subtotal,
				currency: 'USD',
				contentName: 'cart',
				contentIds: cart.lineItems.map((item) => item.variant_id),
				contentType: 'product',
				numItems: cart.lineItemCount
			})
		}
	}

	render () {
		const cart = get(this.props, 'shopify.cart')
		if (!cart || !cart.lineItems) {
			return false
		}

		const isEmpty = cart.lineItemCount === 0
		
		const lineItems = cart.lineItems.map((lineItem, index) => {
			return (
				<div className='cart_line-item' key={index}>
					<div className='cart_line-item-left'>
						<div className='cart_line-item-image-wrapper'>
							<img className='cart_line-item-image' alt={ get(lineItem, 'title') } src={ get(lineItem, 'image.src') } />
						</div>
						<div className='cart_line-item-left-secondary'>
							<div className='cart_line-item-title'>
								{ get(lineItem, 'title') }
							</div>
							<div className='cart_line-item-quantity'>
								<Quantity
									value={get(lineItem, 'quantity')}
									increment={this.props.updateLineItem.bind(null, { cart, lineItemId: get(lineItem, 'id'), quantity: get(lineItem, 'quantity') + 1 })}
									decrement={this.props.updateLineItem.bind(null, { cart, lineItemId: get(lineItem, 'id'), quantity: get(lineItem, 'quantity') - 1 })}
									/>
							</div>
						</div>
					</div>
					<div className='cart_line-item-right'>
						<div className='cart_line-item-price'>
							${ get(lineItem, 'line_price') }
						</div>
					</div>
				</div>
			)
		})
		
		const cartContent = (
			<div>
				<div className='cart_line-items-wrapper'>
					{ lineItems }
				</div>
				<div className='cart_total-wrapper'>
					<div className='cart_total-field'>
						Subtotal
					</div>
					<div className='cart_total-value'>
						${ get(cart, 'subtotal') }
					</div>
				</div>
				<div className='cart_buttom-subtext'>
						Discount codes can be added during payment step of checkout
					</div>
				<div className='cart_checkout-button-container'>
					<Button size='large' bsStyle="success" onClick={this.checkout}>
						Checkout
					</Button>
				</div>
			</div>
		)

	  return (
	  	<div id='cart' className={classnames({ 'open': this.props.open, 'empty': isEmpty })}>
	  		<div className='cart_wrapper'>
	  			<div className='cart_header'>
	  				<div className='cart_header-title'>
	  					{ !isEmpty ? 'Your cart' : 'Your cart is empty' }
	  				</div>
	  			</div>
	  			{ !isEmpty && cartContent }
	  		</div>
	  	</div>
		)
	}
}

export default Cart
