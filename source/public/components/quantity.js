import React from 'react'

const Quantity = ({ value, increment, decrement }) => {
	return (
		<div className='quantity_wrapper'>
			<div className='quantity_button-wrapper quantity_button-minus-wrapper' onClick={decrement}>
				-
			</div>
			<div className='quantity_value'>
				{ value }
			</div>
			<div className='quantity_button-wrapper quantity_button-add-wrapper' onClick={increment}>
				+
			</div>
		</div>
	)
}

export default Quantity
