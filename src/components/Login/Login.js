import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    var navigate = new useNavigate();
    function validateLogin(e) {
        e.preventDefault();
        const form = e.target;
        const userName = form.elements.username.value;
        const passWord = form.elements.password.value;
        if (userName == passWord) {
            // If login is successful, navigate to the dashboard
            navigate('../Dashboard');
        } else {
            // If login fails, handle the error (e.g., show an error message)
            console.log('Invalid username or password');
        }
    }
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
            <h2 className='text-5xl font-semibold'>Welcome Back</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back! Please enter your Details.</p>

            <form action="post" onSubmit={validateLogin}>
                <div className='mt-8'>
                    <label htmlFor="" className='text-lg font-medium'>Username:</label>
                    <input type="text" name="username" className='w-full border-2 rounded-xl border-gray-200 p-4 mt-1 bg-transparent' placeholder='Enter Your Username' />
                </div>

                <div className='mt-8'>
                    <label htmlFor="" className='text-lg font-medium'>Password:</label>
                    <input type="password" name="password" className='w-full border-2 rounded-xl border-gray-200 p-4 mt-1 bg-transparent' placeholder='Enter Your Password' />
                </div>

                <div className='mt-8 flex justify-between items-center'>
                    <div className=''>
                        <input type="checkbox" name="" id="remember" />
                        <label htmlFor="remember" className='ml-2 font-medium text-base'>Remember me</label>
                    </div>
                    <button type="button" className='font-medium text-base text-violet-500'>Forgot Password</button>
                </div>

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-violet-500 text-lg font-bold text-white'>Sign in</button>
                    <button type="button">
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
