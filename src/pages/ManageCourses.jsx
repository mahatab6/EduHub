import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { IoAddOutline } from "react-icons/io5";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import graduation from '../assets/graduation.png'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Bounce, toast } from 'react-toastify';
import Loading from './Loading';
import { Helmet } from 'react-helmet';




const ManageCourses = () => {

    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [singleCourse, setSingleCourse] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/manage-courses/${user?.email}`,{
            headers:{
                authorization: `Bearer ${user?.accessToken}`
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
        return <Loading/>
    };

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/courses/${id}`)
        .then(data =>{
            if(data.data.deletedCount == 1){
                toast('Delete done', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                const updateData = singleCourse.filter(course => course._id !== id);
                setSingleCourse(updateData)
            }
        }
        )
    }

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Manage Courses | EduHub</title>
            </Helmet>
            <div className='flex items-center justify-around py-12 px-2'>
                <div>
                    <h1 className='text-3xl font-bold dark:text-white text-gray-900'>Manage Courses</h1>
                    <p className='text-gray-600 mt-2 dark:text-white'>Manage your created courses</p>
                </div>
                <Link to="/add-course" className='btn bg-purple-600 text-white rounded-xl'><IoAddOutline size={25}/> Add New Course</Link>
            </div>
            
            
            {
                singleCourse.length === 0 ? (
                    <div className='text-center py-16'>
                    <img className='w-28 text-gray-400 mx-auto mb-4' src={graduation} alt="" />
                    <h1 className='text-2xl font-semibold text-gray-900 mb-4 dark:text-white'>No courses created yet</h1>
                    <p className='text-gray-600 mb-8 dark:text-white'>Start sharing your knowledge by creating your first course.</p>
                    <Link to="/add-course" className='btn bg-purple-600 text-white rounded-xl'>
                        <IoAddOutline size={25}/> Create Your First Course
                    </Link>
                    </div>
                ) : (
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                <thead>
                                    <div className='pt-4 pl-4 space-y-2'>
                                        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Your Courses</h1>
                                        <p className='text-gray-600 mt-2 dark:text-white'>You have created {singleCourse.length} courses</p>
                                    </div>
                                    <tr>
                                    <th className='text-left py-3 px-4 text-2xl font-bold text-black dark:text-white'>Title</th>
                                    <th className='text-left py-3 px-4 text-2xl font-bold text-black dark:text-white'>Description</th>
                                    <th className='text-left py-3 px-4 text-2xl font-bold text-black dark:text-white'>Created</th>
                                    <th className='text-left py-3 px-4 text-2xl font-bold text-black dark:text-white'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {singleCourse.map((course, index) => (
                                    <tr key={index} className="hover:bg-base-300">
                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>{course.created}</td>
                                        <td>
                                            <div className="flex justify-center items-center h-full gap-1">

                                                <Link to={`/edit-course/${course._id}`} className="btn rounded-xl btn-primary"><FaRegEdit />Edit</Link>
                                                <button onClick={() => handleDelete(course._id)} className="btn rounded-xl bg-red-600 text-white"><MdDeleteForever />Delete</button>
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

export default ManageCourses;