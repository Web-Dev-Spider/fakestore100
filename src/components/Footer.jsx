import React from 'react'

function Footer() {
    console.log('footer component rendering')
    return (
        <div className='flex flex-col justify-center items-center md:flex-row py-2 bg-black text-white '>
            <p className='text-center md:text-left'>Fakestore &copy; 2025</p>
            <p className='text-center text-[9px] md:text-[12px] md:pe-4 font-light md:fixed md:right-0 md:bottom-0'>By NMS with React and TailwindCSS</p>
        </div>
    )
}

export default Footer
