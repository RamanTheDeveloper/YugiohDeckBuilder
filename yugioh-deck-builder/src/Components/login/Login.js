import React, { useState } from 'react'
import { login } from '../../Firebase/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const image = require('../images/Yugi-Joey-Kaiba.png')

const Login = () => {

	const navigate = useNavigate()

	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(form);
		navigate("/homepage")
	}

	return (
		<section className="h-screen">
			<div className="px-6 py-12 h-full w-full">
			<center><h1>Login</h1></center>
				<div className="flex flex-col justify-center align-middle items-center flex-wrap h-full g-4 text-gray-800 ">
					<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 w-full flex justify-center">
						<img
							src={image}
							className="w-[45rem] p-4"
							alt="Phone image"
							loading='lazy'
						/>
					</div>
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<input
									type="text"
									id='mail'
									className="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Email address"
									onChange={(e) => setForm({...form, email: e.target.value})}
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Password"
									onChange={(e) => setForm({...form, password: e.target.value})}
								/>
							</div>

							<div className="flex justify-between items-center mb-6 w-[44rem]">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-800 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="exampleCheck3"
										checked
									/>
									<label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
									>Remember me</label
									>
								</div>
								<a
									href="#!"
									className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
								>Forgot password?</a
								>
							</div>


							<button
								type="submit"
								className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700  hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900  active:shadow-lg transition duration-150 ease-in-out w-[44rem]"
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
							>
								Sign in
							</button>

							<div className="text-center lg:text-left">
								<p className="text-sm font-semibold mt-2 pt-1 mb-0">
									Don't have an account?
									<Link to="/register">
									<a
										href="#!"
										className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
									>   Register</a>
									</Link>
								</p>
							</div>

						</form>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Login
