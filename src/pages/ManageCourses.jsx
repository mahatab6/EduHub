import React from 'react';
import { Link } from 'react-router';
import { IoAddOutline } from "react-icons/io5";


const ManageCourses = () => {

    
    return (
        <div>
            <div className='flex items-center justify-around py-12'>
                <div>
                    <h1 className='text-3xl font-bold text-gray-900'>Manage Courses</h1>
                    <p className='text-gray-600 mt-2'>Manage your created courses</p>
                </div>
                <Link to="/add-course" className='btn bg-purple-600 text-white rounded-xl'><IoAddOutline size={25}/> Add New Course</Link>
            </div>
            
        </div>
    );
};

export default ManageCourses;