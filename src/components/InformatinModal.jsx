import React from 'react'

function InformatinModal({ message1, message2, onClose }) {
    return (
        <div className='fixed inset-0 flex flex-col items-center justify-center backdrop-blur-sm'>

            <div className='bg-white px-5 py-10 rounded-lg shadow-lg text-center'>
                <button className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors' onClick={onClose}>Close</button>
                <h3 className='text-2xl'>{message1 || "Nothing is there, for this page, right now!"}</h3>
                <h4>{message2 || "Please comeback later!"}</h4>
            </div>
        </div>
    )
}

export default InformatinModal
