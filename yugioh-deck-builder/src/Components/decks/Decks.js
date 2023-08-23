import React, { useState } from 'react'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import Search from './Search'
import { AiFillStar } from 'react-icons/ai';

function Decks(props) {

    const image = require('../images/blue-eyes-white-dragon.png')

    const [name, setName] = useState([])
    const [selectedCard, setSelectedCard] = useState(null)
    const [filteredData, setFilteredData] = useState([])
    const [mainZoneCards, setMainZoneCards] = useState([])
    const [isDraggingOver, setIsDraggingOver] = useState(false)

    const handelCardClick = (card) => {
        setSelectedCard(card)
    }

    const handleFilteredDataChange = (filteredData) => {
        setFilteredData(filteredData);
    }

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedMainZoneCards = Array.from(mainZoneCards);
        const movedCard = filteredData.find(card => card.id.toString() === result.draggableId);
        updatedMainZoneCards.splice(result.destination.index, 0, movedCard);

        setMainZoneCards(updatedMainZoneCards);
    }

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
                    <div className='flex flex-row flex-wrap border-black border-2 border-solid h-28'>
                        <DragDropContext onDragEnd={handleDragEnd} onDragEnter={() => setIsDraggingOver(true)} onDragLeave={() => setIsDraggingOver(false)}>
                            <Droppable droppableId='main-zone'>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`flex flex-row flex-wrap p-2 ${isDraggingOver ? 'border-dashed border-blue-500' : 'border-solid border-black'
                                            }`}
                                    >
                                        {mainZoneCards.map((card, index) => (
                                            <Draggable
                                                key={card.id.toString()}
                                                draggableId={card.id.toString()}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className='w-20'
                                                    >
                                                        <img
                                                            src={card.card_images[0].image_url_small}
                                                            alt="Card"
                                                            className='w-auto h-auto'
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
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
                <div className='flex flex-col w-auto overflow-y-auto'>
                    <div className='flex flex-col'>
                        <Search onCardClick={handelCardClick} onFilteredDataChange={handleFilteredDataChange} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Decks