import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStore } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
    const [isMobileView, setIsMobileView] = useState(false)
    return (
        <div className='fixed w-full top-0 left-0 z-50'>
            <nav className='p-2 bg-slate-400 flex justify-between items-center md:px-30 transition-all duration-500'>

                <div className='font-bold'> <FontAwesomeIcon icon={faStore} className='mx-2' /><Link to={"/"}> <span className='hover:text-white transition duration-300'>Home</span> </Link></div>
                <div className={`md:flex ${isMobileView ? 'flex flex-col' : 'hidden'} py-2 md:space-x-6  transition-all duration-300`}>
                    {/* <div className={`md:flex ${isMobileView ? 'block' : 'hidden'} space-x-6 px-2`}> */}
                    <Link className='hover:text-white transition-all' to={'/products'}>Products</Link>
                    <Link className='hover:text-white  ' to={'categories'}>Categories</Link>
                    <Link className='hover:text-white  ' to={'/profile'}>Profile</Link>
                </div>
                <div>
                    <Link>Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
