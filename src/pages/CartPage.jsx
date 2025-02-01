import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
    const cartItems = useSelector((state) => state.cart.value)
    console.log(cartItems[0])
    return (
        <div className='m-3 bg-white w-full p-3'>
            <h4 className='font-light text-4xl border-b opacity-80 mb-2'>Shopping Cart</h4>
            {
                cartItems.map((item) => (

                    <div className='h-25 space-x-4 border-b-[1.5px] border-gray-200 w-full flex flex-col md:flex-row' key={item.id}>
                        <img src={item.images[0]} alt="Prod-Image" className='h-20 w-20' />
                        <div>

                            <p className='font-semibold  md:font-normal md:text-2xl'>{item.title}</p>

                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='bg-red-600 text-white text-[10px] px-1 rounded-sm'>Limited time deal</p>
                            <span className='font-extralight text-xl'> {item.discountPercentage}
                                <span className='font-medium text-gray-700'>Rs {item.price}</span>
                            </span>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartPage
