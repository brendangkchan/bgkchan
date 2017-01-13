import React, { Component } from 'react'
import { Link } from 'react-router'
import { Sticky } from 'react-sticky'
import classnames from 'classnames'
import get from 'lodash.get'
import Cart from './cart'

const LOGO_URL = 'https://d2jk9tf9979qo8.cloudfront.net/signature-60.png'

const menuConfig = [{
	name: 'Work',
	url: '/work'
},
{
	name: 'Shop',
	url: '/shop'
},
{
	name: 'About',
	url: '/about'
}]

class Menu extends Component {
	constructor (props) {
		super(props)
		this.toggleMenu = this.toggleMenu.bind(this)
		this.closeMenuAndCart = this.closeMenuAndCart.bind(this)
		this.toggleCart = this.toggleCart.bind(this)
		this.state = {
			open: false,
			cartOpen: false
		}
	}

	toggleMenu () {
		if (!this.state.open) {
			this.setState({
				open: true,
				cartOpen: false
			})
		} else {
			this.setState({ open: false })
		}
	}

	closeMenuAndCart () {
		this.setState({
			open: false,
			cartOpen: false
		})
	}

	toggleCart () {
		if (!this.state.cartOpen) {
			this.setState({
				open: false,
				cartOpen: true
			})
		} else {
			this.setState({ cartOpen: false })
		}
	}

	componentWillReceiveProps (nextProps) {
		if (!get(this.props, 'shopify.popupCart') &&
				get(nextProps, 'shopify.popupCart')) {
			this.setState({ cartOpen: true })
			setTimeout(this.props.popupCartComplete, 2000)
		} 
		else if (get(this.props, 'shopify.popupCart') &&
				!get(nextProps, 'shopify.popupCart')) {
			this.setState({ cartOpen: false })
		}
	}

	render () {
		const links = menuConfig.map((menuItem, index) => {
			return (
				<li key={index}>
					<Link 
						to={menuItem.url} 
						className='menu-item'
						activeStyle={{color: 'gray'}}>
							{ menuItem.name }
					</Link>
				</li>
			)
		})

		const cartProps = {
			open: this.state.cartOpen,
			...this.props
		}

		const cartEmpty = get(this.props, 'shopify.cart.lineItemCount') <= 0

	  return (
	  	<Sticky id='header-sticky'>
		  	<div id='header'>
			  	<div className={classnames('menu', { 'open': this.state.open })}>
			  		<div className='header-row'>
			  			<div className='menu-button mobile-button' onClick={this.toggleMenu}>
			  				<img className='mobile-button-menu' src='https://d2jk9tf9979qo8.cloudfront.net/menu.png' />
			  			</div>
				  		<div className='home-logo' onClick={this.closeMenuAndCart}>
				  			<Link to='/'>
				  				<img src={LOGO_URL} alt='bgkchan' />
			  				</Link>
			  			</div>
			  			<div className='menu-button' onClick={this.toggleCart}>
			  				{ !cartEmpty && <div className='menu-cart-count'/> }
			  				<img className='menu-button-cart' src='https://d2jk9tf9979qo8.cloudfront.net/cart-empty.svg' />
			  			</div>
		  			</div>
		  			<div className='mobile-menu-overlay' onClick={this.closeMenuAndCart} />
			  		<ul onClick={this.closeMenuAndCart}>
				  		{ links }
				  	</ul>
			  	</div>
		  	</div>
		  	<Cart { ...cartProps }/>
	  	</Sticky>
		)
	}
}

export default Menu
