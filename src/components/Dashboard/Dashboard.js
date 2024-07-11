import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Dashboard({ }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`h-screen bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
            <div className="flex flex-col justify-between p-4">
                {isOpen && <h1 className="text-2xl font-bold">My App</h1>}
                <button onClick={toggleNav} className="focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className='flex flex-col justify-between mt-4'>
                    <FaHome className="mr-3 hover:text-yellow-300" />

                </div>
            </div>
            <nav className={`mt-5 ${isOpen ? 'block' : 'hidden'} hover:block`}>
                <a href="#home" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-yellow-300">
                    <FaHome className="mr-3" /> {isOpen && 'Home'}
                </a>
                <a href="#about" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-yellow-300">
                    <FaInfoCircle className="mr-3" /> {isOpen && 'About'}
                </a>
                <a href="#services" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-yellow-300">
                    <FaServicestack className="mr-3" /> {isOpen && 'Services'}
                </a>
                <a href="#contact" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-yellow-300">
                    <FaEnvelope className="mr-3" /> {isOpen && 'Contact'}
                </a>
            </nav>
        </div>
    )
}

export default Dashboard