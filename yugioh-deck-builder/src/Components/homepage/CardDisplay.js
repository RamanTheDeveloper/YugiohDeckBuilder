import React from 'react'
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

    let lastIndex = 25

    function handleWishlist(id){
        let oldCard = JSON.parse(localStorage.getItem('cards'))
        localStorage.setItem("cards", JSON.stringify([...oldCard]))

    }

    const cardsList = (id, name) => {
        const obj = {
            id: id,
            name: name
        }
        localStorage.setItem('items', JSON.stringify({...obj}))
    }


    return (
        <>
            <div className='flex justify-center align-middle'>
                <div className='box-border h-full w-[75rem] border-2 flex flex-col justify-center align-middle'>
                    {filteredData.splice(0, lastIndex).map((card) => {
                        return (
                            <div key={card.id} className='flex h-auto w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard'>
                                <div className='flex h-40 w-56 justify-center align-middle'>
                                    <img src={card.card_images[0].image_url_small} className='w-auto h-auto' alt="Yugioh Card Image" loading='lazy'/>
                                </div>
                                <div className='flex flex-col justify-center align-middle w-full'>
                                    <h4><b>Name:</b> {card.name}</h4>
                                    <p><b>Description:</b> {card.desc}</p>
                                </div>
                                <div className="flex flex-row justify-center align-middle gap-3 h-full w-auto">
                                    <button className='bg-red-500 text-white font-medium h-14 w-auto rounded p-2 shadow-md hover:bg-red-800 hover-shadow-lg' onClick={() => cardsList(card.id, card.name)}>Wishlist</button>
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