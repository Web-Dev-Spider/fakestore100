import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    console.log('user la')
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            <main className='flex flex-grow pt-16 bg-slate-200'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout
