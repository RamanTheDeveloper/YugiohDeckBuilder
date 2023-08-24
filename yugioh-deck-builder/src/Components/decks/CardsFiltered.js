import React, { useEffect, useState } from 'react'
import Cards from '../../JsonData/FormattedData.json'
import { AiFillStar } from 'react-icons/ai';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    useEffect(() => {
        if (props.onFilteredDataChange) {
            props.onFilteredDataChange(filteredData);
            console.log('Test');
        }
    }, [filteredData, props.onFilteredDataChange]);



    return (
        <DragDropContext>
            <div className='flex justify-center align-middle px-4 overflow-y-auto overflow-x-hidden font-normal' >
                <Droppable droppableId="main-zone">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='box-border h-auto w-[35rem] border-2 border-slate-600 flex flex-col justify-center align-middle'
                        >
                            {filteredData.slice(0, lastIndex).map((card, index) => (
                                <Draggable key={card.id.toString()} draggableId={card.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={() => {
                                                props.onCardClick(card);
                                                console.log('Card clicked', card);
                                            }}
                                            className='flex h-full w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard'
                                        >
                                            <div className='flex h-40 w-56 justify-center align-middle'>
                                                <img
                                                    {...provided.dragHandleProps}
                                                    src={card.card_images[0].image_url_small}
                                                    className='w-auto h-auto'
                                                    alt="Yugioh Card Image"
                                                    loading='lazy'
                                                />
                                            </div>
                                            <div className='flex flex-col justify-center align-middle w-full'>
                                                <h4><b>{card.name}</b></h4>
                                                <p>{card.attribute}/{card.race}</p>
                                                <span><AiFillStar /> {card.level}</span>
                                                <p>{card.atk}/{card.def}</p>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>

    );
}

export default CardsFiltered