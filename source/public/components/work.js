import React from 'react';
const Image = require('./image')();
const imageConfig = require('../image-config')();

const Work = () => {
  return (
  	<div>
	  	{
	  		imageConfig.map((image) => {
	  			return (<Image key={image.name} imageObject={image}></Image>)
	  		})
	  	}
  	</div>
	)
}

module.exports = () => {
	return Work;
}