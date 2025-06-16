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
import Swal from 'sweetalert2';
import Loading from './Loading';
import { Helmet } from 'react-helmet';


const EnrolledCourses = () => {

    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [singleCourse, setSingleCourse] = useState([]);

    useEffect(()=>{
        axios.get(`https://course-server-tan.vercel.app/enroll-manage-courses/${user?.email}`,{
            headers:{
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(data =>
        {
            setSingleCourse(data.data);
            setLoading(false);
        }
        )
    },[user])

    if(loading){
        return<Loading/>
    };

    const handleEnroll = (id) => {
        Swal.fire({
            title: "Remove Enrollment",
            text: "Are you sure you want to remove your enrollment? You can always enroll again later.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Deleted!",
                text: "Enrollment removed",
                icon: "success"
                });
                axios.delete(`https://course-server-tan.vercel.app/enroll-courses-delete/${id}`)
                const newCourse = singleCourse.filter(course => course._id !== id);
                setSingleCourse(newCourse);
            }
            });
    }

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Enrollments Courses | EduHub</title>
            </Helmet>
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
                                            <button onClick={()=>handleEnroll(course._id)} className="btn rounded-xl bg-red-600 text-white"> <TiDelete size={25}/>Remove Enrollment</button>
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