import React from 'react'
import Menu from './menu'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

const SignupForm = () => {
  return (
		<div classNameName='email-form'>
			<div id="mc_embed_signup">
				<form action="//bgkchan.us14.list-manage.com/subscribe/post?u=ec316e265337471357352d19a&amp;id=6020aed278" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
			    <div id="mc_embed_signup_scroll">
					<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
				    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true'>
				    	<input type="text" name="b_ec316e265337471357352d19a_6020aed278" tabIndex="-1" value="" />
			    	</div>
				    <div className="clear">
			    		<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
				    </div>
			    </div>
				</form>
			</div>
    </div>
	)
}

export default SignupForm
