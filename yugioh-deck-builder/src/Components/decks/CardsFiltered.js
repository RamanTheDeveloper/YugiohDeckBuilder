import React from 'react'
import Cards from '../../JsonData/FormattedData.json'

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

    let lastIndex = 25



    return (
        <>
            <div className='flex justify-center align-middle px-4 overflow-y-auto overflow-x-hidden'>
                <div className='box-border h-auto w-[35rem] border-2 border-slate-600 flex flex-col justify-center align-middle'>
                    {filteredData.splice(0, lastIndex).map((card) => {
                        return (
                            <div key={card.id} className='flex h-full w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard'>
                                <div className='flex h-40 w-56 justify-center align-middle'>
                                    <img src={card.card_images[0].image_url_small} className='w-auto h-auto' alt="Yugioh Card Image" loading='lazy' />
                                </div>
                                <div className='flex flex-col justify-center align-middle w-full'>
                                    <h4>{card.name}</h4>
                                    <p>{card.type}</p>
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