import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const LatestCourses = () => {

    const [latestData, setLatestData] = useState([]);
    useEffect(()=>{
        axios.get('https://course-server-tan.vercel.app/latest-courses')
        .then(data =>
            setLatestData(data.data)
        )
    },[])
    return (
        <div data-aos="fade-up" className='my-8'>
            <div className='text-center mb-8 '>
                <h1 className='text-4xl font-bold  mb-4 '>Latest Courses</h1>
                <p className='text-xl'>Discover our newest additions to the course catalog</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-11/12 mx-auto'>
                {
                latestData.map((course) => (
                    <div key={course._id} className="card hover:shadow-2xl hover:-translate-y-2 transition duration-300 bg-base-100 shadow-md m-4 p-4">
                        <figure>
                            <img className='w-full h-48 object-cover rounded-t-lg' src={course.photo} alt={course.title} />
                            <p className='flex items-center text-white rounded-xl text-base p-1 font-bold bg-yellow-400 absolute top-6 right-1 gap-1'><IoTimeOutline /> {course.duration}</p>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{course.title}</h2>
                            <div className='flex justify-around pt-3'>
                                <p className='flex items-center gap-1'>Created: {course.created}</p>
                            </div>
                        </div>
                        
                        <Link to={`/course-details/${course._id}`} className='btn border-1 border-purple-600 hover:bg-purple-600 hover:text-white rounded-2xl'>Start Learning</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default LatestCourses;