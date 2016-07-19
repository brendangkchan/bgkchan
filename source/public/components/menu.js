import React from 'react';
const Link = require('react-router').Link;

const menuConfig = [{
	name: 'Home',
	url: ''
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
  return (
  	<div className='menu'>
  		<ul>
	  	{
	  		menuConfig.map((menuItem) => {
	  			return (
	  				<li>
	  					<Link 
	  						to={menuItem.url} 
	  						className='menu-item'
	  						activeStyle={{color: 'gray'}}>
	  							{menuItem.name}
  						</Link>
						</li>
					)
	  		})
	  	}
	  	</ul>
  	</div>
	)
}

module.exports = () => {
	return Menu;
}
