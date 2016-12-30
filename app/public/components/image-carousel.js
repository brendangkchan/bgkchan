import React, { Component } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/CarouselItem'

class ImageCarousel extends Component {
	render () {
		const { image, onClick } = this.props
		if (!image) {
			return false
		}

		if (image.urls.length === 1) {
			return (
				<img
					className='image-carousel_image box-shadow'
					src={image.urls[0]}
					alt={image.title} 
					onClick={onClick.bind(null, 0)} />
			)
		}

		const content = image.urls.map((url, index) => (
			<CarouselItem key={index}>
				<img
					className='image-carousel_image box-shadow'
					src={url}
					alt={image.title}
					onClick={onClick.bind(null, index)} />
			</CarouselItem>
		))

		return (
	  	<div className='image-carousel_wrapper'>
	  		<Carousel
	  			indicators={false}>
	  			{ content }
  			</Carousel>
	  	</div>
		)
	}
}

export default ImageCarousel