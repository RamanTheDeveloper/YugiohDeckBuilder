import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';

function Reset() {

    const [email, setEmail] = useState("")
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (loading) return
        if (user) navigate("/")
    }, [user, loading])



    return (
        <section className="h-screen">
            <div className="px-6 py-12 h-full w-full">
                <center><h1>Reset your password</h1></center>
                <div className="flex flex-col justify-center align-middle items-center flex-wrap h-full g-4 text-gray-800 ">
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    id='mail'
                                    className="form-control block w-[44rem] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700  hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900  active:shadow-lg transition duration-150 ease-in-out w-[44rem]"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={() => sendPasswordResetEmail(email)}>
                                Send password reset email
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

export default Reset