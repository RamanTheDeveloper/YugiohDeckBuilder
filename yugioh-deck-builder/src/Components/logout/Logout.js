import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../Firebase/firebase'

function Logout() {

    const logout = async () => {
      try{
        await auth.signOut()
        console.log("Sign out successful!")
      } catch(error){
        console.log("Error occured!", error)
      }
    }



  return (
    <ul>
        <li>
            <a className="m-4 text-black bg-white px-6 py-2 rounded-2xl border-white border-2 hover:border-2-white decoration-none text-base font-semibold uppercase hover:text-white hover:bg-black hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300"
            onClick={logout}>
              <Link to={'/login'}>Logout</Link>
            </a>
          </li>
    </ul>
  )
}

export default Logout