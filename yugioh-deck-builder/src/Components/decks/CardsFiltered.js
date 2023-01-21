import React, { useState } from 'react'
import Cards from '../../JsonData/FormattedData.json'
import { AiFillStar } from 'react-icons/ai';

function CardsFiltered(props) {

    const filteredData = Cards.data.filter((e) => {
        if (props.input === '') {
            return e
        }
        else {
            //console.log(e)
            return e.name.toLowerCase().includes(props.input)
        }
    })

    let lastIndex = 50

    function showName(e){
        console.log(e)
    }


    return (
        <>
            <div className='flex justify-center align-middle px-4 overflow-y-auto overflow-x-hidden font-normal'>
                <div className='box-border h-auto w-[35rem] border-2 border-slate-600 flex flex-col justify-center align-middle'>
                    {filteredData.splice(0, lastIndex).map((card) => {
                        return (
                            <div key={card.id}  onMouseOver={(e) => showName(card.name, e)} className='flex h-full w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard'>
                                <div className='flex h-40 w-56 justify-center align-middle'>
                                    <img src={card.card_images[0].image_url_small} className='w-auto h-auto' alt="Yugioh Card Image" loading='lazy' 
                                    />
                                </div>
                                <div className='flex flex-col justify-center align-middle w-full'>
                                    <h4><b>{card.name}</b></h4>
                                    <p>{card.attribute}/{card.race}</p>
                                    <span><AiFillStar/> {card.level}</span>
                                    <p>{card.atk}/{card.def}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CardsFiltered