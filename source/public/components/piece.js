import React, { Component } from 'react'
import find from 'lodash.find'
import get from 'lodash.get'
import capitalize from 'capitalize'
import Image from './image'
import imageConfig from '../image-config'
import Lightbox from './lightbox'
import ImageCarousel from './image-carousel'
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed'
import DocumentTitle from 'react-document-title'

class Piece extends Component {
	constructor (props) {
		super(props)
		this.setImage = this.setImage.bind(this)
		this.clearImage = this.clearImage.bind(this)
		this.state = {
			featuredIndex: null
		}
	}

	setImage (index) {
		this.setState({ featuredIndex: index })
	}

	clearImage () {
		this.setState({ featuredIndex: null })
	}

	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
	}

	render () {
		const { image } = this.props
		if (!image) {
			return false
		}

		let videoContent
		if (image.videos.length > 0) {
			const videos = image.videos.map((video, index) => {
				return (
					<ResponsiveEmbed a4by3 key={index}>
			      <embed src={video} />
			    </ResponsiveEmbed>
				)
			})
			videoContent = (
				<div className='piece_videos'>
					<h4 className='piece_videos-header'>Videos</h4>
					{ videos }
				</div>
			)
		}

		return (
	  	<div className='piece_wrapper'>
	  		<DocumentTitle title={`Bgkchan Art | ${capitalize(image.title)}`} />
	  		<div className='piece_image'>
	  			<ImageCarousel image={image} onClick={this.setImage} />
  			</div>
	  		<div className='piece_text'>
		  		<h3 className='piece_title'>{image.title}</h3>
					<h4 className='piece_date'>{image.date}</h4>
					<p className='piece_description'>{image.description}</p>
				</div>
				{ videoContent }
				<Lightbox
		  		key='work-lightbox'
		  		imageOnly={true}
		  		image={image}
		  		featuredIndex={this.state.featuredIndex}
		  		close={this.clearImage} />
	  	</div>
		)
	}
}

export default Piece