import React, {useState} from 'react'
import {login} from '../../Firebase/Auth'

const Login = () => {
	const [form,setForm] = useState({
		email:'',
		password:''
	})
	const handleSubmit = async(e)=>{
		e.preventDefault();
		await login(form);

	}
	const InputFields = {
		padding:'0.5rem',
		margin:'0.8rem',
		borderRadius: '4px'
	}
	const ButtonStyle = {
		borderRadius: '4px',
		padding:'0.7rem',
		margin:'0.5rem'
	}
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit} >
			<label for="email">Email</label>
			<input type="text" style={InputFields}
				placeholder="email" id="mail"
			onChange={(e) =>
			setForm({...form, email: e.target.value})} />
			<br/>
			<label for="password">Password</label>
			<input type="password" placeholder="Password"
				style={InputFields}
			onChange={(e) =>
			setForm({...form, password: e.target.value})}/>
			<br/>
			<button type="submit" style={ButtonStyle}>
				Submit
			</button>
			</form>
		</div>

	)
}

export default Login
