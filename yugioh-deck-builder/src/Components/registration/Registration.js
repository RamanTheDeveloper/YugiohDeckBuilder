import React, { useState } from 'react'
import { register } from '../../Firebase/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';

const image = require('../images/register.png')

const Register = () => {

	const navigate = useNavigate()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	
	let isRegistered = false

	const handleSubmit = async (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log(user)
				navigate("/login")
				if (user != null) {
					isRegistered = true
				}
				else {
					isRegistered = false
					navigate("/login")
				}
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMsg = error.message
				console.log(errorCode, errorMsg)
			})

	}

	return (
		<section class="h-screen">
			<div class="px-6 py-12 h-full w-full">
				<center><h1>Create an account</h1></center>
				{isRegistered && <span>User already exists</span>}
				<div class="flex flex-col justify-center align-middle items-center flex-wrap h-full g-4 text-gray-800">
					<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 w-full flex justify-center">
						<img
							src={image}
							className="w-[45rem] p-4"
							alt="Phone image"
							loading='lazy'
						/>
					</div>
					<div class="md:w-8/12 lg:w-5/12 lg:ml-20">
						<form>
							<div class="mb-6">
								<input
									type="text"
									class="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Username"
								/>
							</div>

							<div class="mb-6">
								<input
									type="email"
									id='mail'
									class="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Email address"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div class="mb-6">
								<input
									type="password"
									class="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								class="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700  hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900  active:shadow-lg transition duration-150 ease-in-out w-[44rem]"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
								onClick={handleSubmit}>
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Register
