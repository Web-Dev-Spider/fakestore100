import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faStarHalfStroke, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'
function ProductDetails() {
    const [product, setProduct] = useState({})
    const [showMore, setShowMore] = useState(false)
    const [isReviewShowing, setisReviewShowing] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.value)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${id}`)
                console.log(res.data)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()



    }, [id])

    const handleshowMoreDetails = () => {

        setShowMore((prevValue) => !prevValue)
        console.log("Showmore ", showMore)

    }

    const handleReviews = () => {
        setisReviewShowing((prevValue) => !prevValue)

    }

    const getStars = (rating) => {
        const stars = []
        let halfStar = false
        for (let i = 0; i < 5; i++) {
            if (i < rating) {

                console.log(i, "full star")
                stars.push(<FontAwesomeIcon icon={faStar} key={i} className='text-yellow-500' />)
            }
            else if (rating - i >= 0.5 && !halfStar) {
                console.log(i, "Half star")
                halfStar = true
                stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={i} className='text-yellow-500' />)
            }
            else
                stars.push(<FontAwesomeIcon icon={faStar} key={i} className='' />)
            // stars.push(<FontAwesomeIcon icon="fa-regular fa-star" />)
        }
        return stars
    }
    return (
        // <div className=' flex p-2 md:p-4 flex-col md:flex-row gap-8 mt-3 justify-center items-center h-3/4 drop-shadow-xl w-3/4 mx-auto'>
        //     <img src={product?.images?.[0]} className='flex items-center w-1/2 h-auto' alt="Product Image" />
        //     <div>
        //         <h4 className='text-3xl font-medium'>{product.title}</h4>
        //         <h4 className='font-semibold'>Brand: {product.brand}</h4>
        //         <p>{product.description}</p>
        //         <div>

        //             <span className='font-bold'>Price : ${product.price}</span>
        //             <span className='bg-yellow-200 p-1 ml-2  animate-ping font-bold' >Now {product.discountPercentage
        //             }% discount </span>
        //             <p>Rating : {product.rating}</p>
        //             <p className='text-red-500 font-normal'>{product.returnPolicy}</p>
        //             <div>

        //                 <p>Reviews <span className='font-semibold'>({product.reviews.length})</span></p>
        //                 {
        //                     product?.reviews?.map((review) => (
        //                         <div className="m-2" key={review.
        //                             reviewerEmail} >
        //                             <div className='flex my-3'>
        //                                 <FontAwesomeIcon icon={faUser} className='text-2xl text-slate-500 pr-2' />
        //                                 <span className='font-medium'>{review.reviewerName}</span>
        //                             </div>
        //                             <p className='font-light text-sm'>Rating: {getStars(review.rating)}</p>
        //                             <p className='text-sm font-medium'>{review.comment}</p>
        //                         </div>
        //                     ))
        //                 }
        //             </div>
        //         </div>



        //         {showMore && (product.returnPolicy)}
        //     </div>

        // </div>


        // using grid layout in tailwindcss

        <div className='grid grid-cols-1 md:grid-cols-3 p-2 md:p-4 flex-col md:flex-row gap-8 mt-3 justify-center items-center h-3/4 drop-shadow-xl w-3/4 mx-auto'>

            {/* Scrolling carousel not working  */}
            {/* <div className='relative overflow-hidden w-64'>
                <div className=" flex animate-scroll space-x-4 overflow-x-auto rounded-box w-full p-2">
                    {product?.images?.map((image, i) => (
                        <div className="carousel-item shrink-0 w-64" key={i}>
                            <img
                                src={image}
                                className="w-full h-40 rounded-lg object-contain"
                                alt={`Slide ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div> */}



            {console.log("Product images", product.images)}
            <img src={product?.images?.[0]} className='flex items-center w-auto h-auto md:col-span-1' alt="Product Image" />
            <div className='flex flex-col md:col-span-2 space-y-1'>
                <h4 className='text-3xl font-medium'>{product.title}</h4>
                <h4 className='font-semibold'>Brand: {product.brand}</h4>
                <p>{product.description}</p>
                <div>

                    <span className='font-bold'>Price : ${product.price}</span>
                    <p className='md:inline'> <span className='bg-yellow-200 p-1  animate-ping font-bold  md:inline' style={{ animationDuration: '3s' }}>Now {product.discountPercentage
                    }% discount</span> </p>

                    <p>Rating : {product.rating}</p>
                    <p className='text-red-500 font-normal'>{product?.returnPolicy}</p>

                    <button className="btn btn-sm mt-1  btn-success mr-2" onClick={() => dispatch(addToCart(product))} >Add to Cart</button>

                    {
                        cartItems.length > 1 && cartItems.some((item) => item.id == product.id) && (
                            <button className="btn btn-sm mt-1  btn-error" onClick={() => dispatch(removeFromCart(product.id))} >Remove All</button>

                        ) || <button className="btn btn-sm mt-1  btn-error" onClick={() => dispatch(removeFromCart(product.id))} >Remove </button>

                    }

                    <p className='mt-2'>Reviews <span onClick={handleReviews} className='font-semibold text-red-700 hover:cursor-pointer hover:text-blue-800 mr-4'>({product?.reviews?.length})<span className='px-2 transform translate-y-1.5'><FontAwesomeIcon className='text-2xl animate-bounce' icon={isReviewShowing ? faCaretUp : faCaretDown} /></span> </span></p>
                    <div className='h-48  overflow-y-auto p-2 rounded-md'>
                        {
                            isReviewShowing && (

                                product?.reviews?.map((review) => (
                                    <div className="m-2" key={review.
                                        reviewerEmail} >
                                        <div className='flex my-3'>
                                            <FontAwesomeIcon icon={faUser} className='text-2xl text-slate-500 pr-2' />
                                            <span className='font-medium'>{review.reviewerName}</span>
                                        </div>
                                        <p className='font-light text-sm'>Rating: {getStars(review.rating)}</p>
                                        <p className='text-sm font-medium'>{review.comment}</p>
                                    </div>
                                )))
                        }
                    </div>
                </div>



                {showMore && (product.returnPolicy)}
            </div>

        </div>
    )
}

export default ProductDetails
