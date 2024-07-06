import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Axios } from '../utils/api';

const Modal = ({ isOpen, onClose, course }) => {
    const { user, updateUser } = useContext(AuthContext);
    const [input, setInput] = useState('');
    const [message, setMessage] = useState();
    const [finalPrice, setFinalPrice] = useState(course.price);
    const [referredUser, setReferredUser] = useState(null);

    if (!isOpen) return null;

    const verifyReferral = async (e) => {
        e.preventDefault();
        setMessage({ loading: 'Wait Verifying Referral' });
        try {
            const verify = await Axios.put('/referral', { userId: user.id, referral: input });
            if (verify.status === 200) {
                const discount = course.price * (course.refrerralDiscount / 100);
                setFinalPrice(course.price - discount);
                setMessage({ success: `Referral verified and applied, you saved $${discount}` });
                setReferredUser(verify.data);
            }
        } catch (err) {
            setMessage({ err: err.response.data.message });
            setFinalPrice(course.price);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage({ loading: 'Wait Processing Payment' });
            const payment = await Axios.post('/purchases', {
                userId: user.id,
                courseId: course.id,
                price: effectivePrice,
                usedReferral: referredUser ? referredUser.id : '',
                coinsUsed: coinsToUse,
            });
            if (payment.status === 200) {
                setMessage({ success: 'Payment Successful' });
                updateUser();
                setTimeout(() => {
                    onClose();
                }, 1000);
            }
        } catch (err) {
            setMessage({ err: err.response.data.message });
        }
    };

    const discountedPrice = finalPrice;
    const coinsToUse = Math.min(discountedPrice, parseFloat(user.coins));
    const effectivePrice = Math.max(discountedPrice - coinsToUse, 0);
    const remainingCoins = parseFloat(user.coins) - coinsToUse;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Billing</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold text-blue-600">{course.title}</h1>
                    <h3 className="text-gray-600">{course.description}</h3>
                    <p className="text-red-500">Discount on using Referral: {course.refrerralDiscount}%</p>
                    <p className='text-xs text-fuchsia-800'>You have {user.coins} points</p>
                    <form className="flex justify-between items-center" onSubmit={verifyReferral}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Referral Link</label>
                            <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded ml-2 hover:bg-green-600 transition-colors text-sm" >Apply</button>
                    </form>
                </div>
                {message && message.loading && <div className="mt-4 p-2 text-center text-sm bg-amber-400 text-amber-900">{message.loading}</div>}
                {message && (
                    <div className={`mt-4 p-2 text-center text-sm ${message.err ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                        {message.err ? message.err : message.success}
                    </div>
                )}
                <div className="mt-6">
                    <table className="w-full text-left">
                        <tbody>
                            <tr>
                                <td className="font-semibold">Original Price</td>
                                <td>${course.price}</td>
                            </tr>
                            {referredUser && (
                                <tr>
                                    <td className="font-semibold">Referral Discount</td>
                                    <td>- ${(course.price * (course.refrerralDiscount / 100))}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="font-semibold">Coins Used</td>
                                <td>- ${coinsToUse}</td>
                            </tr>
                            <tr className="font-bold">
                                <td>Total Effective Price</td>
                                <td>${effectivePrice}</td>
                            </tr>
                            {effectivePrice === 0 && (
                                <tr className="font-bold">
                                    <td>Remaining Coins</td>
                                    <td>${remainingCoins}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end items-center mt-6">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition-colors">Close</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;