import React, { Component } from 'react'
import Menu from './menu'
import SignupForm from './signup-form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import DocumentTitle from 'react-document-title'

class Shop extends Component {
	componentDidMount () {
		// scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0
	}
	
	render () {
		return (
	  	<div className='shop_wrapper'>
	  		<DocumentTitle title='Bgkchan Art | Shop' />
				<div className='background' />
				<div className='shop_content'>
					<div className='coming-soon'>
						<h2 className='coming-soon_header'>Coming 2017</h2>
						<h3 className='coming-soon_subheader'>subscribe to get exclusive discounts and updates on new art products!</h3>
					</div>
					<SignupForm />
		    </div>
			</div>
		)
	}
}

export default Shop