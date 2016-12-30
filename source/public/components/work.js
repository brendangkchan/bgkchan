import React, { Component } from 'react'
import Image from './image'
import imageConfig from '../image-config'
import Lightbox from './lightbox'
import find from 'lodash.find'
import get from 'lodash.get'

class Work extends Component {
	componentDidMount () {
		// Load the main image for each piece
		imageConfig.map((imageObject) => {
			let img = document.createElement('img');
			img.src = imageObject.urls[0]
		})
	}

	render () {
		return (
	  	<div className='work_wrapper'>
	  		<div className='work_images'>
			  	{
			  		imageConfig.map((image, index) => {
			  			return (
			  				<Image
			  					key={index}
			  					imageObj={image}
			  					{...this.props} />
		  				)
			  		})
			  	}
		  	</div>
	  	</div>
		)
	}
}

export default Work;