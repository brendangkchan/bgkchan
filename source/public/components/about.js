import React, { Component } from 'react'
import Menu from './menu'
import DocumentTitle from 'react-document-title'

class About extends Component {
	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
	}
	
	render () {
	  return (
	  	<div>
	  		<DocumentTitle title='Bgkchan Art | About' />
				<div className='about_wrapper'>
					<div className='about_top'>
						<div className='about_image-wrapper'>
							<img className='about_image' alt='profile picture' src='https://d2jk9tf9979qo8.cloudfront.net/korea.png' />
						</div>
						<p className='about_image-caption'>My girlfriend and I freezing our asses off in Seoul, Korea.</p>
					</div>
					<div className='about_text'>
						<p>Yo my name is Brendan aka bgkchan. I'm a 24 year old artist/designer/photographer from San Francisco.</p>
						<p>My influences come mostly from illustration, geometric patterns, hip hop, and street art. I enjoy detais on everything from art to clothing to industrial design.</p>
						<p>Exploring new cities is one of my favorite things to do, the vibe of the people, art, and buildings is unique in each one. My top cities visited are Tokyo and Chicagao, everything about those two was inspiring and impressive.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About