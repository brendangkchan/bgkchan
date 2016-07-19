import React from 'react';
const IMAGE_PATH = '../images/';
const IMAGE_EXT = '.png';



const Image = ({ imageObject }) => {
	const imageURL = `${IMAGE_PATH}${imageObject.name}${IMAGE_EXT}`;
	console.log(imageURL);
	const imageStyle = {
		background: `#eee url(${imageURL}) center center`,
		backgroundSize: '110%'
	}

  return (
  	<div className='image-thumb' style={imageStyle}>
  		<div className='overlay'>
  			<div className='text'>
  				<div className='name'>{imageObject.name.replace(/-/g, ' ')}</div>
  				<div className='date'>{imageObject.date}</div>
				</div>
  		</div>

  	</div>
	)
}

module.exports = () => {
	return Image;
}