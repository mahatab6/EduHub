import React, { useEffect, useState } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router';
import axios from 'axios';
import Loading from './Loading';
import { Helmet } from 'react-helmet';



const Courses = () => {
    const [ loading, setLoading ] = useState(true);
    const [courseData, setCourseData] = useState([]);

    
    useEffect(()=>{
        axios.get('https://course-server-tan.vercel.app/all-courses')
        .then(data => {
            setCourseData(data.data);
            setLoading(false);
        })
        
    },[])

    if(loading){
        return <Loading/>;
        }

   

    return (
        <div>
            <Helmet>
                <title>All Courses | EduHub</title>
            </Helmet>
            <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600 mb-4'>
                <h1 className='text-5xl font-bold text-white mb-4'>All Courses</h1>
                <p className='text-xl text-white mb-4'>Discover amazing courses and start your learning journey</p>
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
                        
                        <Link to={`/course-details/${course._id}`} className='btn bg-purple-600 text-white rounded-2xl'>View Details</Link>
                    </div>
                ))
            }
            </div>

            
        </div>
    );
};

export default Courses;