import React, { useEffect, useState } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router';
import axios from 'axios';



const Courses = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/all-courses')
        .then(data =>
            setCourseData(data.data)
        )
    },[])

    console.log(courseData);


    return (
        <div>
            <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600 mb-4'>
                <h1 className='text-5xl font-bold text-white mb-4'>All Courses</h1>
                <p className='text-xl text-white mb-4'>Discover amazing courses and start your learning journey</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search"  className="focus:outline-none focus:border-none"/>
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:max-w-7xl mx-auto px-4'>
                {
                courseData.map((course) => (
                    <div key={course._id} className="card bg-base-100 shadow-md m-4 p-4">
                        <figure>
                            <img className='w-full h-48 object-cover rounded-t-lg' src={course.photo} alt={course.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{course.title}</h2>
                            <p className='text-sm text-muted-foreground mb-4'>{course.description}</p>
                            <div className='flex justify-around pt-3'>
                                <p className='flex items-center gap-1'><IoTimeOutline />{course.duration}</p>
                                <p className='flex items-center gap-1'><FaUserFriends /> 0 enrolled</p>
                            </div>
                            <div className='flex justify-around'>
                                <p>By {course.instructor}</p>
                                <p>created: {course.created}</p>
                            </div>
                        </div>
                        <Link className='btn bg-purple-600 text-white rounded-2xl'>View Details</Link>
                    </div>
                ))
            }
            </div>

            
        </div>
    );
};

export default Courses;