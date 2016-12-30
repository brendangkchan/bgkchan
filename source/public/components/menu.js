import React from 'react';
const Link = require('react-router').Link;

const LOGO_URL = 'https://d2jk9tf9979qo8.cloudfront.net/signature-60.png'

const menuConfig = [
{
	name: 'Home',
	url: '/'
},
{
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
}];

const Menu = () => {
	const links = menuConfig.map((menuItem, index) => {
		const menuItemContent = menuItem.name === 'Home' ?
			<img className='home-logo' src={LOGO_URL} /> :
			menuItem.name

		return (
			<li key={index}>
				<Link 
					to={menuItem.url} 
					className='menu-item'
					activeStyle={{color: 'gray'}}>
						{ menuItemContent }
				</Link>
			</li>
		)
	})

  return (
  	<div className='menu'>
  		<ul>
	  		{ links }
	  	</ul>
  	</div>
	)
}

export default Menu;
