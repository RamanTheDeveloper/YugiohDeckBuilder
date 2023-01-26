import React, { useEffect, useState } from 'react'

function Wishlist() {

  const [data, setData] = useState({})

  useEffect(() => {
    const localStorageItems = JSON.stringify(localStorage.getItem('items'))
    console.log(localStorageItems)
    setData(localStorageItems)
  }, {})

  console.log(data)
  

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row w-auto h-auto p-6 justify-center align-items'>
        <div className='flex flex-row w-auto border-2'>
          <h1>Wishlists</h1>
          {data.map(card => (
            <div key={card.id}>
              <h1>Name: {card.name}</h1>
              <p>Desc: {card.desc}</p>
              <img src={card.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist