import React from 'react'

function LoadingIcon() {
    return (
        <div className='flex justify-center items-center w-screen'>

            <svg width={36} height={36} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style dangerouslySetInnerHTML={{ __html: ".spinner_5nOS{transform-origin:center;animation:spinner_sEAn .75s infinite linear}@keyframes spinner_sEAn{100% { transform: rotate(360deg) }}" }} /><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" /><path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" className="spinner_5nOS" /></svg>
        </div>
    )
}

export default LoadingIcon
