import React, { useState, Suspense } from 'react'
import { useRef } from 'react'
import Cards from '../../JsonData/FormattedData.json'
import { AiFillStar } from 'react-icons/ai';

function CardsSearch(props) {
    const [inputText, setInputText] = useState("")
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

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


    const [cardName, setCardName] = useState()


    return (
        <>
            <div className="items-center py-6 px-4 flex justify-center" >
                <div className="relative mr-3">
                    <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                        type="text"
                        className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                        placeholder="Search Here..."
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={inputHandler}
                    />
                </div>
            </div>
            <div className='flex w-auto h-24'>
                <div className='flex justify-center align-middle px-4 overflow-y-auto overflow-x-hidden font-normal'>
                    <div className='box-border h-auto w-[35rem] border-2 border-slate-600 flex flex-col justify-center align-middle'>
                        {filteredData.splice(0, lastIndex).map((card) => {
                            return (
                                <div key={card.id} className='flex h-full w-full justify-center align-middle box-border border-2 gap-3 overflow-auto myCard'>
                                    <div className='flex h-40 w-56 justify-center align-middle'>
                                        <img src={card.card_images[0].image_url_small} className='w-auto h-auto' alt="Yugioh Card Image" loading='lazy'
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center align-middle w-full'>
                                        <h4><b>{card.name}</b></h4>
                                        <p>{card.attribute}/{card.race}</p>
                                        <span><AiFillStar /> {card.level}</span>
                                        <p>{card.atk}/{card.def}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsSearch