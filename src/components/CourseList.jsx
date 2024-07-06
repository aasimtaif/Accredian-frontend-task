import React, { useState, useEffect, useContext } from 'react'
import { Axios } from '../utils/api'
import Modal from './Modal';
import { AuthContext } from '../context/AuthContext';
function CourseList() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const { user } = useContext(AuthContext);
    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };
    useEffect(() => {
        Axios.get('/courses')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Course List</h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data && data.map((course, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h1 className="text-2xl font-semibold mb-2 text-blue-600">{course.title}</h1>
                        <h3 className="text-gray-600 mb-4">{course.description}</h3>
                        <h4 className="text-xl font-bold mb-2 text-green-600">${course.price}</h4>
                        <p className="text-red-500 mb-6">Discount on using Referral: {course.refrerralDiscount}%</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
                            onClick={() => openModal(course)}
                            disabled={user && user.coursesPaid && user?.coursesPaid?.includes(course.id)}
                        >
                            { user && user.coursesPaid && user?.coursesPaid?.includes(course.id) ? 'Already Bought' : 'Buy Course'}
                        </button>
                    </div>
                ))}
            </div>
            {selectedCourse && (
                <Modal course={selectedCourse} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </div>
    );
};
export default CourseList