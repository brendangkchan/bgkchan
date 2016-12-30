import React from 'react'
import HomeImage from './home-image'
// const Image = require('./image')();
// const imageConfig = require('../image-config')();

const images = [{
	title: 'Coloring Book',
	date: 'July 2016',
	description: 'Chance the Rapper comic inspired',
	url: 'https://d2jk9tf9979qo8.cloudfront.net/chance.png'
},
{
	title: 'Pablo',
	date: 'October 2016',
	description: 'Kanye x Graffuturism snapchat filter',
	url: 'https://d2jk9tf9979qo8.cloudfront.net/pablo-filter-sample.png'
}]

const Work = () => {
  return (
  	<div>
	  	{
	  		images.map((image, index) => {
	  			return (<HomeImage key={index} image={image}></HomeImage>)
	  		})
	  	}
  	</div>
	)
}

export default Work