import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';

const PopularCourses = () => {

    const [popularData, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://eduhub-coral.vercel.app/highest-enrolled-courses')
        .then(data =>
            setData(data.data)
        )
        
    },[]);
    return (
        
        <div  className='bg-base-300 py-20 '>
            <Slide direction="up" >
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold mb-4 '>Popular Courses</h1>
                <p className='text-xl '>Most enrolled courses by our community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
                {popularData.map((course) => (
                    <div
                    key={course._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                    {/* Image */}
                    <div className="relative">
                        <img
                        className="w-full h-56 object-cover"
                        src={course?.coursePhoto}
                        alt={course?.courseTitle}
                        />
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col gap-3 flex-grow">
                        <h2 className="text-lg font-bold text-gray-800 leading-snug">
                        {course?.courseTitle}
                        </h2>

                        <p className="text-sm text-gray-600">
                        {course?.courseDescription?.slice(0, 120)}...
                        </p>

                        {/* Stats */}
                        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto border-t pt-3">
                        <p className="flex items-center gap-1">
                            <span className="font-semibold text-gray-800">{course?.count}</span> Enrolled
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="font-semibold text-gray-800">{course?.term}</span> Duration
                        </p>
                        </div>
                    </div>

                    {/* Button */}
                    <Link
                        to={`/course-details/${course?._id}`}
                        className="m-5 mt-0 block text-center bg-purple-600 text-white font-semibold py-2 rounded-full hover:bg-purple-700 transition"
                    >
                        Enroll Now
                    </Link>
                    </div>
                ))}
            </div>
            </Slide>
        </div>
       
    );
};

export default PopularCourses;