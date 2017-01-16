import React from 'react'
import Menu from './menu'
import Button from 'react-bootstrap/lib/Button'
import { Link } from 'react-router'
import * as Tracking from '../lib/tracking'

const Home = () => {
  return (
  	<div>
			<div id='home_wrapper'>
				<div className='background' />
				<div className='home_work-button-container'>
					<Link to='/work'>
	  				<h2
	  					className='home_work-button'
	  					onClick={Tracking.customEvent.bind(null, { event: 'StartHere' })}>
	  					Start here
  					</h2>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home