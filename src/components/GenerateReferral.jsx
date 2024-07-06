import React, { useState, useContext } from 'react'
import { Axios } from '../utils/api'
import { AuthContext } from '../context/AuthContext'
function GenerateReferral() {
    const [showReferral, setShowReferral] = useState(false)
    const [referral, setReferral] = useState('') // [referral, setReferral
    const { user } = useContext(AuthContext)
    const handleReferral = () => {
        try {
            Axios.get('/referral/' + user.id)
                .then(res => {
                    console.log(res.data)
                    setReferral(res.data)
                    setShowReferral(true)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err)
        }
    }
    if (!user) {
        return (
            <div className='flex w-screen justify-center items-center py-4 bg-red-300'>
                <h1 className='text-white font-bold'>Login to generate referral</h1>
            </div>
        )
    }
    return (
        <div className='flex w-screen justify-center items-center py-4 bg-red-300'>
            {!showReferral ?
                <button className=' font-bold text-white bg-red-800 p-2 rounded-lg ' onClick={handleReferral}>
                    Generate the referral
                </button>
                :
                <div className='flex justify-center items-center gap-5'>
                    <input className='text-black text-center border-none rounded-lg p-1 ' value={referral} readonly/>
                    <button className=' font-bold text-white bg-blue-800 p-2 rounded-lg ' onClick={() => setShowReferral(true)}>
                        Copy
                    </button>
                </div>
            }

        </div>
    )
}

export default GenerateReferral