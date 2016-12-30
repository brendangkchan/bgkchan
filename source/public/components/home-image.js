import React from 'react'

const HomeImage = ({ image }) => {
	const { title, date, description, url } = image

  return (
  	<div className='home-image_wrapper'>
			<img className='home-image_image' src={url} alt={title} />
			<div className='home-image_text'>
				<div className='home-image_title'>{ title }</div>
				<div className='home-image_date'>{ date }</div>
			</div>
  	</div>
	)
}

export default HomeImage
