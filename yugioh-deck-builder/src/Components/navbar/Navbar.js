import React from 'react'

function Navbar() {

  const logo = require('../images/yugioh-logo.png')


  return (
    <div className='sticky flex flex-row justify-center align-middle flex-wrap bg-black w-full h-28 z-20 py-4 px-2'>
      <a href='/#'><img src={logo} alt="Logo" className='w-[145px] h-[75px] cursor-pointer absolute left-20'/></a>
      <ul className='flex justify-center align-middle list-none text-center pt-6'>
        <li><a href='/#' className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Decks</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Wishlist</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Ownlist</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Profile</a></li>
      </ul>
    </div>
  )
}

export default Navbar