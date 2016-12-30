import React, { Component } from 'react';
const IMAGE_PATH = '../images/';
const IMAGE_EXT = '.png';

class Image extends Component {
	render () {
		const { imageObj: image, onClick } = this.props

		const imageStyle = {
			background: `#eee url(${image.thumbUrl}) left bottom no-repeat`,
			backgroundSize: 'cover'
		}

		return (
	  	<div className='image-thumb' style={imageStyle} onClick={this.props.setImage.bind(null, image)}>
	  		<div className='overlay'>
	  			<div className='text'>
	  				<div className='name'>{image.title}</div>
	  				<div className='date'>{image.date}</div>
					</div>
	  		</div>
	  	</div>
		)
	}
}

export default Image