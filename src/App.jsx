import { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContext } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const { user, updateUser } = useContext(AuthContext);
  useEffect(() => {
    updateUser();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
