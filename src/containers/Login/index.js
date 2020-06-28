import React from 'react'
import './index.css'
import CompanyLogo from '../../../static/imgs/generic-logo.jpg'
import { Redirect } from 'react-router-dom'

import UserContext from '../../Context/UserContext'

const Login = ({ apiString}) => {

	//destructuring the value object from the userContext
	const {loggedIn, setLoggedIn} = React.useContext(UserContext);
	
	const [formValidating, setFormValidating] = React.useState(false)
	
	//Form Data
	const [formData, setFormData] = React.useState({
		uname: '',
		psw: ''
	})

	// submit-form function
	const submitForm = (e) => {
		e.preventDefault()

		//set state to 'know' the form is validating
		setFormValidating(true)
		
		//mock network delay
		setTimeout(() => {

			//fetch login api
			fetch(`../../${apiString}/formData.json`)
			.then(res => res.json())
			.then(res => {
				let formRes = res[0]
				//Check for "correct" uname && password
				//This will USUALLY be done on the server
				if(formRes.uname == formData.uname && formRes.psw == formData.psw){
					
					setLoggedIn(true)
				}
				
			})
		}, 300)
	}
	
	if(loggedIn){
		return( <Redirect to="/dashboard" /> )
	}

	return(
		<div id="login">
			<form className={`modal-content animate ${formValidating ? 'fetching' : ''}`} onSubmit={e => submitForm(e)}>
			    <div className="imgcontainer">
			      <img src={CompanyLogo} alt="Generic Company" className="avatar" />
			    </div>

			{/* Show Loading when mock-fetching login data  */}
			    {formValidating && <p id="logginInNotification">Logging In...</p>}

			    <div className="container">
			      	<label htmlFor="uname">
			      	<b>Username</b>
			        <input 
			      	  type="text" 
			      	  placeholder="Enter Username" 
			      	  name="uname" 
			      	  value={formData.uname} 
			      	  onChange={(e) => {
			      	  	let thisVal = {uname: e.target.value}
			      	  	setFormData(() => {
			      	  	  return {...formData, ...thisVal }
			      	  	})
			      	  }}
			      	  required
			      	  disabled={formValidating} />
				  </label>

			      <label htmlFor="psw">
			      	<b>Password</b>
			      	<input 
			        type="password" 
			        placeholder="Enter Password" 
			        name="psw" 
			        value={formData.psw} 
			        onChange={(e) => {
			      	  	let thisVal = {psw: e.target.value}
			      	  	setFormData(() => {
			      	  	  return {...formData, ...thisVal }
			      	  	})
			      	  }}
			      	required
			      	disabled={formValidating}/>
				  </label>
			        
			      <button type="submit">Login</button>
			      <label>
			        <input type="checkbox" name="remember" /> Remember me
			      </label>

			    </div>

			    <div className="container" style={{backgroundColor: "#f1f1f1"}}>
			      <button type="button" className="cancelbtn">Cancel</button>
			      <span className="psw"><a href="#">Forgot password?</a></span>
			    </div>
			  </form>
		</div>
	)
}

export default Login;