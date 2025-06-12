import React from 'react';
import { IoAddOutline } from "react-icons/io5";
import { Link } from 'react-router';


const AddCourse = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
            <div className='w-full max-w-xl p-8 m-6 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl space-y-4'>
                <div className='text-center justify-items-center space-y-2 pb-4'>
                <IoAddOutline size={35} className=' text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full' />
                <h1 className='text-4xl font-bold'>Add New Course</h1>
                <p className='text-base font-normal'>Share your knowledge with the community</p>
                </div>
                <form className=' space-y-3'>
                    <div>
                        <label htmlFor="text" className="block mb-1 text-sm font-medium">
                            Course Title
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="text"
                            placeholder="Enter course title"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <label htmlFor="text" className="block mb-1 text-sm font-medium">
                                Short Description
                            </label>
                            <textarea className="textarea h-24 w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" placeholder="Describe what students will learn in this course"></textarea>
                        </fieldset>
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-1 text-sm font-medium">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
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
                            placeholder="e.g., 4 weeks, 20 hours, 3 months"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                    </div>
                    <div className='bg-blue-50 p-4 rounded-lg'>
                        <h1 className='font-semibold text-blue-900 mb-2'>Course Information</h1>
                        <div className='text-sm text-blue-800 space-y-1'>
                            <p>Instructor:</p>
                            <p>Email:</p>
                            <p>Created:</p>
                        </div>
                    </div>

                    <Link className='btn w-full bg-purple-600 rounded-xl'>Add Course</Link>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;