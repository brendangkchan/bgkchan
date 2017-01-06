import React, { Component } from 'react'
import { Link } from 'react-router'
import { Sticky } from 'react-sticky'
import classnames from 'classnames'
import {  } from '../lib/shopify'

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
		this.toggleOpen = this.toggleOpen.bind(this)
		this.close = this.close.bind(this)
		this.state = {
			open: false
		}
	}

	toggleOpen () {
		this.setState({ open: !this.state.open })
	}

	close () {
		this.setState({ open: false })
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

	  return (
	  	<Sticky id='header-sticky'>
		  	<div id='header'>
			  	<div className={classnames('menu', { 'open': this.state.open })}>
			  		<div className='header-row'>
			  			<div className='menu-button mobile-button' onClick={this.toggleOpen}>
			  				<img className='mobile-button-menu' src='https://d2jk9tf9979qo8.cloudfront.net/menu.png' />
			  			</div>
				  		<div className='home-logo' onClick={this.close}>
				  			<Link to='/'>
				  				<img src={LOGO_URL} alt='bgkchan' />
			  				</Link>
			  			</div>
			  			<div className='menu-button'>
			  				<img className='menu-button-cart' src='https://d2jk9tf9979qo8.cloudfront.net/cart-empty.svg' />
			  			</div>
		  			</div>
		  			<div className='mobile-menu-overlay' onClick={this.close} />
			  		<ul onClick={this.close}>
				  		{ links }
				  	</ul>
			  	</div>
		  	</div>
	  	</Sticky>
		)
	}
}

export default Menu;
