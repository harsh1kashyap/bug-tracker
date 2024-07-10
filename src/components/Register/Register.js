import React from 'react'

function Register() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
            <h2 className='text-5xl font-semibold'>Welcome</h2>

            <div className='mt-4'>
                <label htmlFor="" className='text-lg font-medium'>Username:</label>
                <input type="text" className='w-full border-2 rounded-xl border-gray-200 p-4 mt-1 bg-transparent' placeholder='Enter Your Username' />
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-lg font-medium'>Password:</label>
                <input type="password" className='w-full border-2 rounded-xl border-gray-200 p-4 mt-1 bg-transparent' placeholder='Enter Your Password' />
            </div>

            <div className='mt-4'>
                <label htmlFor="" className='text-lg font-medium'>Re Enter Password:</label>
                <input type="password" className='w-full border-2 rounded-xl border-gray-200 p-4 mt-1 bg-transparent' placeholder='Enter Your Password' />
            </div>


            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-pink-500 text-lg font-bold text-white'>Sign in</button>
                <button>
                    Sign in with Google</button>
            </div>
        </div>
    )
}

export default Register