// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, dispatch } = useContext(AuthContext);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(user)
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl">MyApp</div>
                <div className='flex gap-5'>
                    <div className="hidden md:flex space-x-4">
                        <NavLink to="/" className="text-gray-300 hover:text-1xl hover:text-white">Home</NavLink>
                        {user ?
                            <NavLink to="/course" className="text-gray-300 hover:text-1xl hover:text-white">Account</NavLink>
                            :
                            <NavLink to="/login" className="text-gray-300 hover:text-1xl hover:text-white">Login</NavLink>
                        }
                        {user &&
                            <button to="/logout" className="bg-slate-500 rounded-lg shadow-lg px-2 flex items-center space-x-2 hover:text-1xl hover:text-slate-200"
                                onClick={() => { dispatch({ type: 'LOGOUT' }) }}
                            >Logout</button>}
                    </div>
                    <div className="bg-slate-300 rounded-lg shadow-lg px-2 flex items-center space-x-2">
                        <img
                            src="/image.png"
                            alt="Placeholder"
                            className="w-5 h-5 rounded-full"
                        />
                        <p className="text-gray-800 text-sm font-semibold">
                            {user?.coins}
                        </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col justify-center items-center py-2">
                    <NavLink to="/home" className="text-gray-300 hover:text-2xl hover:text-white ">Home</NavLink>
                    {user ?
                        <NavLink to="/course" className="text-gray-300 hover:text-2xl hover:text-white">Account</NavLink>
                        :
                        <NavLink to="/login" className="text-gray-300 hover:text-2xl hover:text-white">Login</NavLink>
                    }

                </div>
            )}
        </nav>
    );
};

export default Navbar;
