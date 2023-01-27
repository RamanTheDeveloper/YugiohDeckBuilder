import React, { useState } from 'react'
import Cards from '../../JsonData/FormattedData.json'

function CardDisplay(props) {
    
    const filteredData = Cards.data.filter((e) => {
        if(props.input === ''){
            return e
        }
        else{
            //console.log(e)
            return e?.name.toLowerCase().includes(props.input)
        }
    })

    let lastIndex = 50

    const [index, setIndex] = useState(lastIndex)

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scollTop === e.target.clientHeight
        console.log(bottom)
        if(bottom){
            lastIndex += lastIndex
            setIndex(lastIndex)
        }
    }

    const [isEmpty, setEmpty] = useState()

    const cardsList = (id, name, desc, image) => {
        let obj = {
            id: id,
            name: name,
            desc: desc,
            image: image
        }
        if(localStorage.getItem("items") !== null){
            setEmpty(true)
            let oldData = JSON.stringify(localStorage.getItem('items'))
            localStorage.setItem('items', JSON.stringify({...oldData, ...obj}))
        }
        else{
            localStorage.setItem('items', JSON.stringify({ ...obj}))
            setEmpty(false)
        }
    }


    return (
        <>
            <div className='flex justify-center align-middle'>
                <div className='box-border h-full w-[75rem] border-2 flex flex-col justify-center align-middle'>
                    {filteredData.splice(0, index).map((card) => {
                        return (
                            <div key={card.id} className='flex h-auto w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard' onScroll={handleScroll}>
                                <div className='flex h-40 w-56 justify-center align-middle'>
                                    <img src={card.card_images[0].image_url_small} className='w-auto h-auto' alt="Yugioh Card Image" loading='lazy'/>
                                </div>
                                <div className='flex flex-col justify-center align-middle w-full'>
                                    <h4><b>Name:</b> {card.name}</h4>
                                    <p><b>Description:</b> {card.desc}</p>
                                </div>
                                <div className="flex flex-row justify-center align-middle gap-3 h-full w-auto">
                                    <button className='bg-red-500 text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-red-800 hover-shadow-lg' onClick={() => cardsList(card.id, card.name, card.desc, card.image)}>Wishlist</button>
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