import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function CategoryDisplay({ items, category = "test" }) {
    console.log(...items)

    return (
        <div className='flex flex-wrap bg-slate-200 mb-4 justify-center'>
            {
                items.map((item) => (
                    <div className='m-2' key={item.id}>

                        <ProductCard product={item} key={item.id} />
                    </div>
                ))
            }


        </div>


    )
}

export default CategoryDisplay
