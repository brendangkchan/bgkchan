import React from 'react'
import Menu from './menu'
import SignupForm from './signup-form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

const Shop = () => {
  return (
  	<div className='shop_wrapper'>
			<div className='background' />
			<div className='shop_content'>
				<div className='coming-soon'>
					<h2 className='coming-soon_header'>Coming 2017</h2>
					<h3 className='coming-soon_subheader'>subscribe to get exclusive updates on new art!</h3>
				</div>
				<SignupForm />
	    </div>
		</div>
	)
}

export default Shop