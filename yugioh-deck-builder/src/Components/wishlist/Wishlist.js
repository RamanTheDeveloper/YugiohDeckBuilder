import React from 'react'
import Cards from '../../JsonData/FormattedData.json'

const Wishlist = (props) => {

    console.log(props)

    return (
        <div className='flex justify-center align-middle p-6'>
            <div className='box-border h-full w-[75rem] border-2 flex flex-row justify-center align-middle p-6'>
                <h1>Wishlist</h1>
                
            </div>
        </div>
    )
}

export default Wishlist