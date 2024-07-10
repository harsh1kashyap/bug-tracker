import React from 'react'
import Login from './User';
import Register from '../Register/Register';


// <Login />

function User() {
    return (
        <div className='flex w-full h-screen'>
            <div className='w-full flex items-center justify-center lg:w-1/2'>

                <Register />
            </div>

            <div className='hidden lg:flex h-full w-1/2 relative items-center justify-center bg-gray-200'>
                <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce' />
                <div className='w-full h-1/2 absolute bg-white/10 bottom-0 backdrop-blur-lg' />
            </div>
        </div>
    )
}

export default User