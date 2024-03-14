import React from 'react'
import loader from '../assets/loader.svg'

const Loading = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-slate-100'>
            <img src={loader} alt='loader' />
        </div>
    )
}

export default Loading