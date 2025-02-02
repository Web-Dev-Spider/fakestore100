import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Links } from 'react-router-dom'
import CategoryDisplay from '../components/CategoryDisplay'
import LoadingIcon from '../components/LoadingIcon'
function Categories() {
    const [category, setCategory] = useState([]) // The names of all categories
    const [categoryItems, setCategoryItems] = useState([]) //Items of particular category
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) //To check whether side menu to show or open
    const [catHead, setCatHead] = useState(null)
    const [isLoadingCategories, setIsloadingCategories] = useState(false)
    const [isLoadingCatItems, setIsloadingCatItems] = useState(false)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsloadingCategories(true)
                const res = await axios.get('https://dummyjson.com/products/categories')
                // console.log(res.data)
                setCategory(res.data)

            } catch (error) {
                console.log(error)
            } finally {
                setIsloadingCategories(false)
            }
        }
        fetchCategories()



    }, [])

    useEffect(() => {
        console.log("No of categoryItems: ", categoryItems.length)
    }, [categoryItems])

    const handleCategories = async (findCategory, catName) => {
        console.log('Searching for ', findCategory)

        try {
            setIsloadingCatItems(true)
            const res = await axios.get(`https://dummyjson.com/products/category/${findCategory}`)
            res.data.products.length > 0 ?
                console.log("Search results : for  ", findCategory, "::", res.data.products) : console.log(`No products in ${findCategory}`)
            setCatHead(catName)
            setCategoryItems((prev) => res.data.products)

            // console.log(`${categoryItems.length} items in ${findCategory} category`)
            console.log("Type of category items", typeof categoryItems)
        } catch (error) {
            console.log("Error fetching category", error)
        } finally {
            setIsloadingCatItems(false)
        }
    }
    return (
        <div>
            {isLoadingCategories ? <div className='flex h-screen items-center'><LoadingIcon /></div> : (<div className='flex flex-col md:flex-row'>


                <div className={`overflow-y-scroll shadow-lg w-50 h-[calc(100vh-6rem)] z-40 fixed overflow-x-hidden md:shadow-none transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                    {category.map((cat, index) => (

                        <div onClick={() => handleCategories(cat.slug, cat.name)} key={`${cat}-${index}`} className='bg-slate-300  px-2 border-b-rose-700 hover:transform-all hover:border hover:scale-105 duration-300'>{cat.name}</div>

                    ))}
                </div>

                {/* Scrollbar control button for mobile screens */}

                <button onClick={() => setIsSidebarOpen(prev => !prev)} className='fixed md:hidden bottom-4 right-4  p-2 bg-slate-800 text-white rounded-lg shadow-lg z-55'>
                    {isSidebarOpen ? 'Close' : 'Menu'}
                </button>
                {/* the following dynamic rendering is not completed */}
                {/* {isSidebarOpen ? "" : <h3 className='font-medium md:hidden'>Click on the menu and select Categories</h3>} */}
                {isLoadingCatItems ? <div className='flex h-screen items-center'><LoadingIcon /></div> : (<div className='flex-1 md:ml-53 md:mt-2 p-2 overflow-auto '>
                    <CategoryDisplay items={categoryItems} itemCategory={catHead} />
                </div>)}

            </div>)}
        </div>


    )
}

export default Categories
