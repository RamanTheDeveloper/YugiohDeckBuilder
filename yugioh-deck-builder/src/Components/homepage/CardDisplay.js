import React from 'react'
import { Grid } from 'gridjs-react'
import Cards from '../../../src/JsonData/test.json'

function CardDisplay() {

    return (
        <div className='flex justify-center align-middle'>
            <div className='box-border h-[40rem] w-[75rem] border-2'>
                <div className='w-max flex-col'>
                    <div className='flex h-max w-[75rem]'>
                    {Cards.data.map(card => {
                            return(
                                <div key={card.id} className='flex flex-row justify-evenly align-middle h-max w-[75rem] gap-3 box-border border-2'>
                                    <div className='flex h-40'>
                                        <img src={card.card_images[0].image_url_small}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4><b>Name:</b> {card.name}</h4>
                                        <p><b>Description:</b> {card.desc}</p>
                                        <p><b>Card Type:</b> {card.type}</p>
                                    </div>
                                    <div className="flex flex-row justify-center align-middle gap-3 w-30 h-max">
                                        <button className='bg-red-500 text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-red-800 hover-shadow-lg'>Wishlist</button>
                                        <button className='bg-black text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-gray-800 hover-shadow-lg'>Ownlist</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CardDisplay