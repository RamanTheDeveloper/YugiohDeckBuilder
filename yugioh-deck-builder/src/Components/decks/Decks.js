import React, { useEffect, useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Search from './Search'
import { AiFillStar } from 'react-icons/ai';

function Decks(props) {

    const image = require('../images/blue-eyes-white-dragon.png')

    const [name, setName] = useState([])
    const [selectedCard, setSelectedCard] = useState(null)
    const [filteredData, setFilteredData] = useState([])

    const handelCardClick = (card) => {
        setSelectedCard(card)
    }

    useEffect(() => {
        window.addEventListener('storage', (e) => {
            const localName = JSON.parse(localStorage.getItem('items'))
            console.log(localName)
            if (localName) {
                setName(localName)
            }

        })
    }, [])

    return (
        <div className='h-screen w-full flex flex-row'>
            <div className='flex flex-row h-full w-full'>
                <div className="flex flex-col h-full w-[55rem] gap-6 p-4">
                    {selectedCard ? (
                        <>
                            <div className="flex border-solid border-2 border-black p-2">
                                <h1>{selectedCard.name}</h1>
                            </div>
                            <div className="flex justify-center w-[16rem]">
                                <img src={selectedCard.card_images[0].image_url} alt="Selected Card" />
                            </div>
                            <div className="flex flex-col border-black border-solid border-2 p-2">
                                <p>{selectedCard.attribute}/{selectedCard.race}/{selectedCard.type}</p>
                                <div className='flex flex-row'>
                                    <span><AiFillStar /> {selectedCard.level}</span>
                                </div>
                                <p>{selectedCard.atk}/{selectedCard.def}</p><br />
                                <p>{selectedCard.desc}</p>
                            </div>
                        </>
                    ) : (
                        <p>No card selected</p>
                    )}
                </div>
                <div className='flex flex-col w-[100rem] gap-3 p-4'>
                    <div className='flex flex-row justify-between border-black border-solid border-2 p-2'>
                        <div>
                            <p>Main [40]</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <p>NM[6]</p>
                            <p>EM[17]</p>
                            <p>SP[13]</p>
                            <p>TR[4]</p>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap border-black border-2 border-solid'>
                        <Droppable droppableId='main-zone'>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='flex flex-row flex-wrap'
                                >
                                    {filteredData.slice(0, 50).map((card, index) => (
                                        <Draggable
                                            key={card.id}
                                            draggableId={card.id.toString()}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <img
                                                        src={image}
                                                        alt="Card"
                                                        className='w-20'
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>


                    </div>
                    <div className='flex flex-row justify-between border-black border-solid border-2 p-2'>
                        <div>
                            <p>Extra [11]</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <p>FM[6]</p>
                            <p>SM[6]</p>
                            <p>XYZ[2]</p>
                            <p>RM[1]</p>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap border-black border-2 border-solid'>
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                    </div>
                    <div className='flex flex-row justify-between border-black border-solid border-2 p-2'>
                        <div>
                            <p>Side [13]</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <p>NM[6]</p>
                            <p>EM[17]</p>
                            <p>SP[13]</p>
                            <p>TR[4]</p>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap border-black border-2 border-solid'>
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                    </div>
                </div>
                <div className='flex flex-col w-[45rem] overflow-y-auto'>
                    <div className='flex flex-col'>
                        <Search onCardClick={handelCardClick} onFilteredDataChange={setFilteredData} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Decks