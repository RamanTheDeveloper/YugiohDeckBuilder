import React from 'react'

function Profile() {

    const profile_img = require("../images/profile.png")

  return (
    <>
        <div className='w-full h-full p-6 flex justify-center'>
            <div className='flex flex-col justify-center align-middle items-center w-[45rem] h-[50rem] border-2 gap-3'>
                <div className='flex flex-row'>
                    <div className='flex flex-col w-full h-full'>
                        <img src={profile_img} alt="" className='w-10 h-10'/>
                        <h1>Someone</h1>
                    </div>

                </div>
                <div className='flex flex-row '>
                    <h1>Account Settings</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile