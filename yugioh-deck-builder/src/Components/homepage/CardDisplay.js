import React from 'react'
import { Grid } from 'gridjs-react'
import Cards from '../../../src/JsonData/test.json'

function CardDisplay() {


    return (
        <div className='flex justify-center align-middle'>
            <div className='box-border h-[40rem] w-[75rem] border-2'>
                <div className='box-border h-40 w-auto border-2 flex-col'>
                    <div>
                    {Cards.data.map(card => {
                            return(
                                <div key={card.id}>
                                    <h4>{card.name}</h4>
                                    <p>{card.desc}</p>
                                    <img src={card.card_images[0].image_url_small}/>
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