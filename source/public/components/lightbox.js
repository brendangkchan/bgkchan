import React, { Component } from 'react'
import find from 'lodash.find'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import isInteger from 'is-integer'
import classnames from 'classnames'

class Lightbox extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { image, featuredIndex, imageOnly } = this.props
		let content, textContent
		if (!imageOnly) {
			textContent = (
				<div className='lightbox_text'>
		  		<h3 className='lightbox_title'>{image.title}</h3>
					<h4 className='lightbox_date'>{image.date}</h4>
					<p className='lightbox_description'>{image.description}</p>
				</div>
			)
		}
		if (image && isInteger(featuredIndex)) {
			content = (
				<div className={classnames('lightbox_wrapper', { 'image-only': imageOnly })}>
		  		<div className='lightbox_overlay' onClick={this.props.close} />
		  		<img className='lightbox_image' src={image.urls[featuredIndex]} alt={image.title} />
		  		{ textContent }
		  	</div>
			)
			document.body.className += ' noscroll'
		} else {
			document.body.className = document.body.className.replace(/ noscroll/g, '')
		}

		return (
			<ReactCSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}>
		  	{ content }
	  	</ReactCSSTransitionGroup>
		)
	}
}

export default Lightbox;