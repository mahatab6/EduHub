import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const LatestCourses = () => {

    const [latestData, setLatestData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/latest-courses')
        .then(data =>
            setLatestData(data.data)
        )
    },[])
    return (
        <div>
            <div className='text-center mb-12 mt-8'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>Latest Courses</h1>
                <p className='text-xl text-gray-600'>Discover our newest additions to the course catalog</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:max-w-7xl mx-auto px-4'>
                {
                latestData.map((course) => (
                    <div key={course._id} className="card bg-base-100 shadow-md m-4 p-4">
                        <figure>
                            <img className='w-full h-48 object-cover rounded-t-lg' src={course.photo} alt={course.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{course.title}</h2>
                            <p className='text-sm text-muted-foreground mb-4'>{course.description}</p>
                            <div className='flex justify-around pt-3'>
                                <p className='flex items-center gap-1'>Duration: {course.duration}</p>
                                <p className='flex items-center gap-1'>Created: {course.created}</p>
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

export default LatestCourses;