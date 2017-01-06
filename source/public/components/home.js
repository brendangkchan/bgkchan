import React from 'react'
import Menu from './menu'
import Button from 'react-bootstrap/lib/Button'
import { Link } from 'react-router'

const Home = () => {
  return (
  	<div>
			<div id='home_wrapper'>
				<div className='background' />
				<div className='home_work-button-container'>
					<Link to='/work'>
	  				<h2 className='home_work-button'>Start here</h2>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home