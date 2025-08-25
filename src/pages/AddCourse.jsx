import React, { useContext } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';




const AddCourse = () => {
    const {user} = useContext(AuthContext);
    const today = format(new Date(), 'dd-MM-yyyy');
    const navigated = useNavigate()

    

    const handleAddCourse = (e) => {
        e.preventDefault();
        const from = e.target;
        const title = from.title.value;
        const description = from.description.value;
        const photo = from.photo.value;
        const level = from.Level.value;
        const duration = from.duration.value;
        const seats = from.seats.value;
        const price = from.price.value;

        const courseData = {
            title,
            description,
            photo,
            level,
            duration,
            price: Number(price),
            instructor: user?.displayName,
            instructorPhoto: user?.photoURL,
            email: user?.email,
            created: today,
            seats: seats
            
        };

        axios.post('https://eduhub-coral.vercel.app/add-new-course', courseData)
        .then(() => {
            toast.success('course added successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            navigated("/manage-courses")
        })
        

        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
            <Helmet>
                <title>Add Course | EduHub</title>
            </Helmet>
            <div className='w-full max-w-xl p-8 m-6 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl space-y-4'>
                <div className='text-center justify-items-center space-y-2 pb-4'>
                <IoAddOutline size={35} className=' text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full' />
                <h1 className='text-4xl font-bold'>Add New Course</h1>
                <p className='text-base font-normal'>Share your knowledge with the community</p>
                </div>
                <form onSubmit={handleAddCourse} className=' space-y-3'>
                    <div>
                        <label htmlFor="text" className="block mb-1 text-sm font-medium">
                            Course Title
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="title"
                            required
                            placeholder="Enter course title"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <label htmlFor="text" className="block mb-1 text-sm font-medium">
                                Short Description
                            </label>
                            <textarea 
                            name="description"
                            required
                            className="w-full px-3 py-8 text-base border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" placeholder="Describe what students will learn in this course"></textarea>
                        </fieldset>
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-1 text-sm font-medium">
                            Photo's URL
                        </label>
                        <input
                            type="url"
                            id="photo"
                            name="photo"
                            required
                            placeholder="Enter your photo url"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block mb-1 text-sm font-medium">
                            Duration
                        </label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            required
                            placeholder="e.g., 4 weeks, 20 hours, 3 months"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                   <div>
                        <label htmlFor="Level" className="block mb-1 text-sm font-medium">
                            Course Levels
                        </label>
                        <select
                            id="Level"
                            name="Level"
                            required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            defaultValue="">
                            <option value="" disabled>
                            Select your course level
                            </option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                            <option value="All-Levels">All Levels</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="price" className="block mb-1 text-sm font-medium">
                            Course Price 
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price "
                            required
                            placeholder="Please add your course price $"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="seats" className="block mb-1 text-sm font-medium">
                            Seats 
                        </label>
                        <input
                            type="number"
                            id="seats"
                            name="seats "
                            required
                            placeholder="How many students you want to enroll in the course?"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div className='bg-blue-50 p-4 rounded-lg'>
                        <h1 className='font-semibold text-blue-900 mb-2'>Course Information</h1>
                        <div className='text-sm text-blue-800 space-y-1'>
                            <p>Instructor: {user?.displayName}</p>
                            <p>Email: {user?.email}</p>
                            <p>Created: {today}</p>
                        </div>
                    </div>

                    <button className='btn w-full text-white bg-purple-600 rounded-xl'>Add Course</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;