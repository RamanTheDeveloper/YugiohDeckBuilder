import React from 'react'
import Searchbar from '../homepage/Searchbar'
import Search from './Search'

function Decks(props) {

    const image = require('../images/blue-eyes-white-dragon.png')



    return (
        <div className='h-screen w-full flex flex-row'>
            <div className='flex flex-row h-full w-full'>
                <div className='flex flex-col h-full w-[55rem] gap-6 bg-green-600 p-4'>
                    <div className='flex border-solid border-2 p-2'>
                        <h1>Blue-Eyes White Dragon</h1>
                    </div>
                    <div className='flex justify-center w-[16rem]'>
                        <img src={image} loading="lazy" />
                    </div>
                    <div className='flex flex-row border-solid border-2 p-2'>
                        <p>Card Desc</p>
                    </div>
                </div>
                <div className='flex flex-col bg-orange-600 w-[100rem] gap-3 p-4'>
                    <div className='flex flex-row justify-between border-solid border-2 p-2'>
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
                    <div className='flex flex-row flex-wrap border-2 border-solid'>
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                    </div>
                    <div className='flex flex-row justify-between border-solid border-2 p-2'>
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
                    <div className='flex flex-row flex-wrap border-2 border-solid'>
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                    </div>
                    <div className='flex flex-row justify-between border-solid border-2 p-2'>
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
                    <div className='flex flex-row flex-wrap border-2 border-solid'>
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                        <img src={image} alt="Card" className='w-20' />
                    </div>
                </div>
                <div className='flex flex-col bg-red-600 w-[45rem] overflow-y-auto'>
                    <div className='flex flex-col'>
                        <Search/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Decks