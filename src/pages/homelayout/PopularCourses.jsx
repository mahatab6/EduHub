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
        <div  className='bg-base-300 py-10 '>
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold mb-4 '>Popular Courses</h1>
                <p className='text-xl '>Most enrolled courses by our community</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-11/12 mx-auto'>
                {
                popularData.map((course) => (
                    <div key={course._id} className="card bg-base-100 shadow-md hover:shadow-2xl m-4 p-4 hover:-translate-y-1 transition duration-300">
                        <figure>
                            <img className='w-full h-48 object-cover rounded-t-lg' src={course?.coursePhoto} alt={course?.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold">{course?.courseTitle}</h2>
                            <p className='text-sm text-muted-foreground mb-4'>{course?.courseDescription?.slice(0,150)}...</p>
                            <div className='flex justify-around pt-3'>
                                <p className='flex items-center gap-1'>Enrolled: {course?.count}</p>
                                <p className='flex items-center gap-1'>Duration: {course?.term}</p>
                            </div>
                        </div>
                        
                        <Link to={`/course-details/${course?._id}`} className='text-xl font-bold p-2 bg-black text-white hover:bg-purple-600 rounded-xl text-center'>Enroll Now</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default PopularCourses;