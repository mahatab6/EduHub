import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularCourses = () => {

    const [popularData, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/highest-enrolled-courses')
        .then(data =>
            setData(data.data)
        )
    },[]);
    return (
        <div className='bg-base-300 py-10'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4 dark:text-white'>Popular Courses</h1>
                <p className='text-xl dark:text-white text-gray-600'>Most enrolled courses by our community</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-10/12 mx-auto'>
                {
                popularData.map((course) => (
                    <div key={course._id} className="card bg-base-100 shadow-md hover:shadow-2xl m-4 p-4">
                        <figure>
                            <img className='w-full h-48 object-cover rounded-t-lg' src={course.coursePhoto} alt={course.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{course.courseTitle}</h2>
                            <p className='text-sm text-muted-foreground mb-4'>{course.courseDescription}</p>
                            <div className='flex justify-around pt-3'>
                                <p className='flex items-center gap-1'>Enrolled: {course.count}</p>
                                <p className='flex items-center gap-1'>Duration: {course.term}</p>
                            </div>
                        </div>
                        
                        <Link to={`/course-details/${course._id}`} className='btn bg-purple-600 text-white rounded-2xl'>View Details</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default PopularCourses;