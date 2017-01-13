import React from 'react'

const ProductTile = ({ product, setProduct }) => {
	return (
		<div className='product-tile_wrapper' onClick={setProduct.bind(null, product)}>
			<div className='product-tile_image-wrapper'>
				<img className='product-tile_image' src={product.images[0].src} alt={product.title} />	
			</div>
			<div className='product-tile_text'>
				<div className='product-tile_title'>{ product.title }</div>
				<div className='product-tile_price'>{ `$${Math.round(product.variants[0].price)}` }</div>
			</div>
		</div>
	)
}

export default ProductTile
