import React from 'react'
import Cards from '../../JsonData/FormattedData.json'

function CardDisplay() {
    return (
        <>
            <div className='flex justify-center align-middle'>
                <div className='box-border h-auto w-[75rem] border-2 flex flex-col justify-center align-middle'>
                    {Cards.data.map((card) => {
                        return (
                            <div key={card.id} className='flex h-auto w-full justify-center align-middle box-border border-2 gap-3'>
                                <div className='flex h-40 w-56 justify-center align-middle'>
                                    <img src={card.card_images[0].image_url_small} className='w-auto h-auto'/>
                                </div>
                                <div className='flex flex-col justify-center align-middle w-full'>
                                    <h4><b>Name:</b> {card.name}</h4>
                                    <p><b>Description:</b> {card.desc}</p>
                                    <p><b>Card Type:</b> {card.type}</p>
                                </div>
                                <div className="flex flex-row justify-center align-middle gap-3 h-full">
                                    <button className='bg-red-500 text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-red-800 hover-shadow-lg'>Wishlist</button>
                                    <button className='bg-black text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-gray-800 hover-shadow-lg'>Ownlist</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CardDisplay