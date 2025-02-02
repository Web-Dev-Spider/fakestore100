import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value);

    return (
        <div className="m-3 bg-white w-full p-3">
            <h4 className="font-light text-2xl md:text-4xl border-b opacity-80 mb-2">Shopping Cart</h4>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-5">Your cart is empty! </p>

            ) : (
                cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="border-b-[1.5px] border-gray-200 w-full flex flex-col md:flex-row items-center p-3 gap-4"
                    >

                        <Link to={`/product-details/${item.id}`}>
                            <img
                                src={item.images[0]}
                                alt="Prod-Image"
                                className="h-32 w-32 object-cover rounded-lg"
                            />

                        </Link>
                        <div className="flex flex-col w-full md:w-2/3">
                            <Link to={`/product-details/${item.id}`}>   <p className="font-semibold md:font-normal text-lg md:text-2xl">{item.title}</p>
                                <p className="text-sm">
                                    Rating: <span className="bg-amber-300 px-2 rounded-md">{item.rating}</span>
                                </p>
                                <p className="text-sm">
                                    Return Policy: <span className="text-red-600 font-semibold">{item.returnPolicy}</span>
                                </p>
                                <p className="text-sm">
                                    Shipping: <span className="text-blue-600 font-semibold">{item.shippingInformation}</span>
                                </p>
                            </Link>
                        </div>


                        <div className="flex flex-col items-center md:items-start">
                            <p className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
                                Limited time deal
                            </p>
                            <span className="text-gray-700 text-sm mt-1">
                                {item.discountPercentage}% discount
                            </span>
                            <span className="font-medium text-lg">Rs {item.price}</span>
                        </div>


                        <button
                            className="btn btn-sm mt-2 btn-error md:ml-auto"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartPage;
