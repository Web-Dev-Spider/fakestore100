import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ErrorPage from './ErrorPage'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import LoadingIcon from '../components/LoadingIcon'
function Homepage() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                // const res = await axios.get('https://api.escuelajs.co/api/v1/products')
                const res = await axios.get('https://dummyjson.com/products')

                console.log(res.data.products)
                setProducts(res.data.products)
            } catch (error) {
                console.log(error)

            }
        }
        getProducts()
    }, [])

    return (
        products.length > 0 ? (<div className='container flex flex-wrap justify-center mx-auto items-center gap-6 w-full bg-slate-200 py-2 md:py-3'>
            {
                products.map((item) => (
                    <ProductCard product={item} key={item.id} />
                ))
            }

        </div>) : (<LoadingIcon />)
    )
}

export default Homepage
