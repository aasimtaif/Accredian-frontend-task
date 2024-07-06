// src/components/Login.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Axios } from '../utils/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [input, setInput] = useState();
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleInput = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });

        try {
            const res = await Axios.post('/auth/login', input);
            if (res.status === 200) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                localStorage.setItem('token', JSON.stringify(res.data.token));
                navigate('/');
            }
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <p className="inline-block align-baseline font-bold text-xs text-black  " >
                            Dont have an account?
                            <Link to="/register" className='text-blue-700 pl-2 text-sm'>
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
