import React from 'react'
import social from '../lib/social'
import SignupForm from './signup-form'

const Footer = () => {
	const socialLinks = social.map((socialObj, index) => {
		return (
			<a className='footer_social-icon' href={socialObj.url} target='_blank' key={index}>
				<img src={socialObj.image} />
			</a>
		)
	})

	return (
		<div id='footer'>
			<div className='footer_background' />
			<div className='footer_newsletter'>
				<h4 className='footer_newsletter-header'>Sign up for our newsletter for exclusive discounts and updates!</h4>
				<SignupForm />
			</div>
			<div className='footer_social'>
				{ socialLinks }
			</div>
			<div className='footer_copyright'>© 2016 Brendan Chan. Valid HTML5.</div>
		</div>
	)	
}

export default Footer
