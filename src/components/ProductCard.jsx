import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'

// import { useState } from 'react';
function ProductCard({ product }) {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.value)


    // const [imageIndex, setImageIndex] = useState(0)
    // let imageChangeTimer = null;

    //Function to automatically scroll through all images when hovered. ***** NOt working ******
    // const handleImageChanges = () => {
    //     let noOfImages = product.images.length
    //     if (noOfImages > 0) {
    //         imageChangeTimer = setInterval(() => {
    //             setImageIndex((prevIndex) => prevIndex == noOfImages - 1 ? 0 : prevIndex + 1)
    //         }, 1000)
    //     }
    // }

    //To stop image changing 
    // const handleImageChangeStop = () => {
    //     clearInterval(imageChangeTimer)
    //     setImageIndex(0)
    // }
    //Needs to fix multiple instances of timer working....



    return (
        <div className='bg-white mx-4 md:mx-2 md:w-60  max-h-100 p-2 rounded-xl transition-all transform hover:-translate-y-2  duration-300 hover:shadow-2xl'>
            <img src={product.images[0]} alt="Product Image" className='h-40 w-55 object-contain rounded-xl mx-auto px-1' />
            <div className='flex flex-col'>
                <h3 className='font-semibold h-12 py-2'>{product?.title}</h3>
                <p className='font-light'>{product?.description.slice(0, 90)}</p>
                <div className='flex justify-between py-2'>
                    <span className='font-medium ml-2'>${product.price}</span> <span className='flex items-center gap-1'><FontAwesomeIcon icon={faStar} className='text-amber-300' />{product.rating}</span>
                </div>
                <div className='flex justify-between px-2 py-1'>
                    <Link to={`product-details/${product.id}`}
                    >
                        <button className="btn btn-xs btn-soft btn-primary">View Details</button>
                    </Link>


                    {cartItems.some((item) => item.id == product.id) ? <button className="btn btn-xs btn-soft btn-error" onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button> : <button className="btn btn-xs btn-soft btn-success" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
