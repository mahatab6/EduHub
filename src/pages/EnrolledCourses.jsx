import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { IoBookOutline } from "react-icons/io5";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import online from '../assets/online-course.png'
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";


const EnrolledCourses = () => {

    const {user} = useContext(AuthContext);
    const [singleCourse, setSingleCourse] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/manage-courses/${user?.email}`)
        .then(data =>
            setSingleCourse(data.data)
        )
    },[user])

    console.log(singleCourse)

    return (
        <div className='min-h-screen'>
            <div className='flex items-center justify-around py-12 px-2'>
                <div>
                    <h1 className='text-3xl font-bold text-gray-900'>My Enrolled Courses</h1>
                    <p className='text-gray-600 mt-2'>Courses you have enrolled in</p>
                </div>
                <Link to="/courses" className='btn bg-purple-600 text-white rounded-xl'><IoBookOutline /> Browse More Courses</Link>
            </div>

            {
                singleCourse.length === 0 ? (
                    <div className='text-center py-16'>
                    <img className='w-28 text-gray-400 mx-auto mb-4' src={online} alt="" />
                    <h1 className='text-2xl font-semibold text-gray-900 mb-4'>No enrollments yet</h1>
                    <p className='text-gray-600 mb-8'>Start your learning journey by enrolling in courses that interest you.</p>
                    <Link to="/courses" className='btn bg-purple-600 text-white rounded-xl'>
                         <IoBookOutline />Browse Courses
                    </Link>
                    </div>
                ) : (
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6'>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 px-8">
                            <table className="table">
                                <thead>
                                    <div className='pt-4 pl-4 space-y-2'>
                                        <h1 className='text-3xl font-bold text-gray-900'>Your Enrollments</h1>
                                        <p className='text-gray-600 mt-2'>You are enrolled in {singleCourse.length} course</p>
                                    </div>
                                    <tr>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Course Title</th>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Description</th>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Duration</th>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Instructor</th>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Enrolled On</th>
                                        <th className='text-left py-3 px-4 text-2xl font-bold text-black'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {singleCourse.map((course, index) => (
                                    <tr key={index} className="hover:bg-base-300">
                                        <td>{course.courseTitle}</td>
                                        <td>{course.courseDescription}</td>
                                        <td >
                                            <div className="flex justify-center items-center h-full gap-1">
                                            <span><IoMdTime size={20} /></span>
                                             {course.term}
                                            </div>
                                        </td>
                                        <td >
                                            <div className="flex justify-center items-center h-full gap-1">
                                            <span><FaRegUser size={20}/></span>
                                             {course.lecturer}
                                            </div>
                                        </td>
                                        <td >
                                            <div className="flex justify-center items-center h-full gap-1">
                                            <span><CiCalendarDate size={20}/></span>
                                             {course.enroll}
                                            </div>
                                        </td>
                                        <td>
                                        <div className="flex justify-center items-center h-full">
                                            <button className="btn rounded-xl bg-red-600 text-white"> <TiDelete size={25}/>Remove Enrollment</button>
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )   
            }
        </div>
    );
};

export default EnrolledCourses;