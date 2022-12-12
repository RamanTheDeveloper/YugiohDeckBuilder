import React from 'react'
import { Grid } from 'gridjs-react'
import Cards from '../../../src/JsonData/FormattedData.json'

function CardDisplay() {

    return (
        <div className='flex justify-center align-middle'>
            <div className='box-border h-auto w-[75rem] border-2'>
                    <div className='flex flex-col h-max w-max'>
                    {Cards.data.map(card => {
                            return(
                                <div key={card.id} className='flex flex-row justify-evenly align-middle h-max w-max gap-3 box-border border-2'>
                                    <div className='flex h-40 w-max'>
                                        <img src={card.card_images[0].image_url_small}/>
                                    </div>
                                    <div className='flex flex-col w-max'>
                                        <h4><b>Name:</b> {card.name}</h4>
                                        <p><b>Description:</b> {card.desc}</p>
                                        <p><b>Card Type:</b> {card.type}</p>
                                    </div>
                                    <div className="flex flex-row justify-center align-middle gap-3 w-max h-max">
                                        <button className='bg-red-500 text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-red-800 hover-shadow-lg'>Wishlist</button>
                                        <button className='bg-black text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-gray-800 hover-shadow-lg'>Ownlist</button>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>

        </div>

    )
}

function Search(props){
    const filteredData = Cards.filter((e) => {
        if(props.input === ''){
            return e;
        }
        else{
            return e.text.toLowerCase().includes(props.input)
        }
    })
}

export default CardDisplay