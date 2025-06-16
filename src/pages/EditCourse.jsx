import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';



const EditCourse = () => {

    const {id} = useParams();
    const [oldInfo, setOldInfo] = useState([]);
    const navigated = useNavigate()

    useEffect(()=>{
        axios.get(`https://course-server-tan.vercel.app/course-details/${id}`)
        .then(data =>
            setOldInfo(data.data)
        )
    },[id])

    const handleUpdate = (e) =>{
        e.preventDefault();
        const from = e.target;
        const title = from.title.value;
        const description = from.description.value;
        const photo = from.photo.value;
        const duration = from.duration.value;
        const seats = from.seats.value;

        const updateInfo = {
            title,
            description,
            photo,
            duration,
            seats,
            instructor: oldInfo.instructor,
            email: oldInfo.email,
            created: oldInfo.created,
            
        };

        axios.put(`https://course-server-tan.vercel.app/update-course-data/${id}`,updateInfo)
        .then(data =>{
            if (data.data.modifiedCount === 1) {
                Swal.fire({
                title: "course updated successfully",
                icon: "success",
                draggable: true
                });
                navigated("/manage-courses")
            }
        })
        
    }

    const handleCancel=()=> {
        navigated("/manage-courses")
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
            <Helmet>
                <title>Edit Course | EduHub</title>
            </Helmet>
                    <div className='w-full max-w-xl p-8 m-6 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl space-y-4'>
                        <div className='text-center justify-items-center space-y-2 pb-4'>
                        <FaEdit size={35} />
                        <h1 className='text-4xl font-bold'>Edit Course</h1>
                        <p className='text-base font-normal'>Update your course information</p>
                        </div>
                        <form onSubmit={handleUpdate} className=' space-y-3'>
                            <div>
                                <label htmlFor="text" className="block mb-1 text-sm font-medium">
                                    Course Title
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="title"
                                    defaultValue={oldInfo.title}
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
                                    defaultValue={oldInfo.description}
                                    required
                                    className="w-full px-3 py-8 text-base border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" placeholder="Describe what students will learn in this course"></textarea>
                                </fieldset>
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-1 text-sm font-medium">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    id="photo"
                                    name="photo"
                                    required
                                    defaultValue={oldInfo.photo}
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
                                    defaultValue={oldInfo.duration}
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
                                    defaultValue={oldInfo.seats}
                                    placeholder="How many students you want to enroll in the course?"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                />
                            </div>
                            <div className='bg-blue-50 p-4 rounded-lg'>
                                <h1 className='font-semibold text-blue-900 mb-2'>Course Information</h1>
                                <div className='text-sm text-blue-800 space-y-1'>
                                    <p>Instructor: {oldInfo.instructor}</p>
                                    <p>Email: {oldInfo.email}</p>
                                    <p>Created: {oldInfo.created}</p>
                                </div>
                            </div>
                            <div className='flex justify-around gap-1'>
                                <button className='btn w-2/3 text-white bg-purple-600 rounded-xl'>Update Course</button>
                                <button onClick={handleCancel} className='btn w-1/3 rounded-xl'>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
    );
};

export default EditCourse;