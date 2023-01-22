import React, { useState, Suspense } from 'react'
import { useRef } from 'react'
//import CardsFiltered from './CardsFiltered'
const CardsFiltered = React.lazy(() => import('./CardsFiltered'))

function Search(props) {
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
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <CardsFiltered input={inputText} onMouseOver={() => props.getName(cardName)} getCardName={cardName => setCardName(cardName)}/>
                </Suspense>
            </div>
        </>
    )
}

export default Search