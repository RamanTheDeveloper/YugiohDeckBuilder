import React from 'react'

function DeckList() {
  return (
    <>
      <div className='h-full w-full flex justify-center align-middle w-full h-full p-2'>
        <div className='box-border border-2 box-shadow-md w-[50rem] h-full p-2'>
          <div className='font-bold flex justify-center'>
            <h1>Decks</h1>
          </div>
          <div className='flex flex-col justify-center align-middle'>
            <input type="text" name="Search" placeholder='Search deck...'/>
            <a href="#">Create</a>
          </div>
          <div className='box-border border-2 flex flex-col justify-center align-middle'>
            <p>Name of deck</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeckList