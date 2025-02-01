import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faHouse, faStore } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
    const [isMobileView, setIsMobileView] = useState(false)
    const closeMenu = () => setIsMobileView(false);
    const mobNavLinkClass = "flex px-4 py-2 hover:bg-slate-800 hover:text-white duration-300"
    return (
        <div className='fixed w-full top-0 left-0 z-50'>
            <nav className=' p-2 bg-slate-400 flex justify-between items-center md:px-30 transition-all duration-500'>

                <div className='font-bold'> <FontAwesomeIcon icon={faStore} className='mx-2' /><Link to={"/"}> <span className='hover:text-white transition duration-300'>Home</span> </Link></div>
                <div className={`hidden md:flex  py-2 md:space-x-6  transition-all duration-300`}>
                    {/* <div className={`md:flex ${isMobileView ? 'block' : 'hidden'} space-x-6 px-2`}> */}
                    <Link className='hover:text-white transition-all' to={'/products'}>Products</Link>
                    <Link className='hover:text-white  ' to={'/categories'}>Categories</Link>
                    <Link className='hover:text-white  ' to={'/profile'}>Profile</Link>
                </div>
                <span className='flex  items-center  space-x-2'>
                    <span className='ps-15 font-semibold'>

                        <FontAwesomeIcon icon={faCartShopping} className='text-yellow-300 ps-2' /> 0
                    </span>
                    <div className='hidden md:block'>
                        <Link>Login</Link>
                    </div>
                </span>



                {/* Mobile menu toggle button  */}
                <button className='md:hidden' onClick={() => setIsMobileView(!isMobileView)}>
                    <FontAwesomeIcon icon={isMobileView ? faClose : faBars} />
                </button>

                {/* Mobile nav menu  */}


                <div className={`fixed top-0 left-0 h-full w-2/3 bg-slate-200 ${isMobileView ? 'translate-x-0' : '-translate-x-full'}  transform transition-transform duration-300 md:hidden`}>
                    <button className='absolute top-4 right-4' onClick={closeMenu}><FontAwesomeIcon icon={faClose} /></button>
                    <nav className='flex flex-col space-y-4 mt-10'>
                        <Link onClick={closeMenu} to={'/'} className={mobNavLinkClass}>Home</Link>
                        <Link to={'/products'} className={mobNavLinkClass}>Products</Link>
                        <Link onClick={closeMenu} to={'/categories'} className={mobNavLinkClass}>Categories</Link>
                        <Link to={'/profile'} className={mobNavLinkClass}>Proflie</Link>
                        <Link className={mobNavLinkClass}>Login</Link>
                    </nav>

                </div>


            </nav>
        </div>
    )
}

export default Header
