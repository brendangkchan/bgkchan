import React from 'react'
import get from 'lodash.get'

const ProductTile = ({ product, setProduct }) => {
	const title = get(product, 'title', '')
	const image = get(product, 'images[0].src', '')
	const price = Math.round(get(product, 'variants[0].price', 0))

	return (
		<div className='product-tile_wrapper' onClick={setProduct.bind(null, product)}>
			<div className='product-tile_image-wrapper'>
				<img className='product-tile_image' src={image} alt={title} />	
			</div>
			<div className='product-tile_text'>
				<div className='product-tile_title'>{ product.title }</div>
				<div className='product-tile_price'>{ `$${price}` }</div>
			</div>
		</div>
	)
}

export default ProductTile
