import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AuthContext } from '../context/AuthContext';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import Loading from './Loading';
import { Helmet } from 'react-helmet';



const CourseDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const {user} = useContext(AuthContext);
    const today = format(new Date(), 'dd-MM-yyyy');
    const [enrollCount, setEnrollCount] = useState(0);
    const [isEnrolled, setIsEnrolled] = useState(false); 
    const [loading, setLoading] = useState(true);



    useEffect(()=>{
        axios.get(`http://localhost:3000/course-details/${id}`)
        .then(data =>
        {
            setDetails(data.data);
            setLoading(false);
        }
        )
    },[id]);

   useEffect(() => {
        if (details._id && user?.email) {
            axios.get('http://localhost:3000/enroll-check', {
                params: {
                    courseId: details._id,
                    email: user.email
                }
            })
            .then(data => {
                setIsEnrolled(data.data.enrolled);
            })
            
        }

    }, [details._id, user?.email]);

    useEffect(() => {
        axios.get(`http://localhost:3000/enroll-count/${details._id}`)
            .then(data => {
            setEnrollCount(data.data.count);
        });
    }, [details._id]);

   
    if(loading){
        return <Loading/>
    };


   
    
    const handleEnroll = (details) =>{

        const {_id, title, description, duration, instructor, photo, seats} = details;

        const enrolledData = {
             courseTitle : title,
             courseDescription : description,
             term : duration,
             lecturer : instructor,
             enroll : today,
             courseId : _id,
             courseEmail : user?.email,
             coursePhoto : photo,
             enrollStudent : seats,
        }
        
        axios.post('http://localhost:3000/user-enroll-data', enrolledData)
        .then(data =>{
            if(data.data.insertedId){
                Swal.fire({
                    title: "Enrollment successful",
                    icon: "success",
                    draggable: true
                    });
                setIsEnrolled(true);
                setEnrollCount(prev => prev + 1);

            }
        })
    }

    
    return (
        <div>
            <Helmet>
                <title>{details.title} | EduHub</title>
            </Helmet>
            <div className='p-4 py-16 bg-gradient-to-r from-purple-600 to-blue-600 mb-4 flex-col flex md:items-center lg:flex-row justify-around'>
                <div className='pb-4'>
                    <h1 className='text-5xl font-bold text-white mb-4'>{details.title}</h1>
                    <p className='text-xl text-white mb-4'>Discover amazing courses and start your learning journey</p>
                    <div className='flex flex-wrap gap-2'>
                        <h1 className='flex items-center text-white gap-1'><span><IoMdTime size={25} /></span>{details.duration}</h1>
                        <h1 className='flex items-center text-white gap-1'><span><FaUsers size={25} /></span>{enrollCount}enrolled</h1>
                        <h1 className='flex items-center text-white gap-1'><span><CiCalendarDate size={25} /></span>{details.created}</h1>
                        <h1 className='flex items-center text-white gap-1'><span><FaRegUser size={25} /></span>By {details.instructor}</h1>
                    </div>
                    <div className='mt-4'>
                      {
                            user ? (
                                parseInt(details.seats) === enrollCount ? (
                                <button
                                    disabled
                                    className='rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-300 text-gray-600 cursor-not-allowed'
                                >
                                    No seats left
                                </button>
                                ) : (
                                <button
                                    onClick={() => handleEnroll(details)}
                                    disabled={!user || isEnrolled}
                                    className={`rounded-md text-sm font-medium h-10 px-4 py-2 
                                    ${!user || isEnrolled ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-purple-600'}`}
                                >
                                    {isEnrolled ? 'Already Enrolled' : 'Enroll Now'}
                                </button>
                                )
                            ) : (
                                <>
                                <button className='rounded-md text-sm font-medium disabled:opacity-50 h-10 px-4 py-2 bg-gray-400 text-gray-600 cursor-not-allowed'>
                                    Login Required to Enroll
                                </button>
                                <p className='text-bas pt-2'>
                                    Please <Link to='/login' className='underline'>log in</Link> to enroll in this course.
                                </p>
                                </>
                            )
                        }

                    </div>
                </div>
                <img className='max-w-3xl rounded-2xl' src={details.photo} alt="" />
                
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6'>
                <div className='rounded-lg border bg-card text-card-foreground shadow-xl space-y-2 p-4'>
                    <h1 className='text-2xl font-semibold leading-none tracking-tight'>Course Overview</h1>
                    <p className='text-gray-700 leading-relaxed'>{details.description}</p>
                </div>

                <div className='rounded-lg border bg-card text-card-foreground shadow-xl space-y-8 p-4'>
                    <h1 className='text-2xl font-semibold leading-none text-center'>Course Information</h1>
                    <div className='flex justify-around'>
                        <div>
                            <p className='text-xl font-medium'>Duration</p>
                            <p>{details.duration}</p>
                        </div>
                        <div>
                            <p className='text-xl font-medium'>Instructor</p>
                            <p>{details.instructor}</p>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <p className='text-xl font-medium'>Students Enrolled</p>
                            <p>{enrollCount}</p>
                        </div>
                        <div>
                            <p className='text-xl font-medium'>Created</p>
                            <p>{details.created}</p>
                        </div>
                    </div>
                </div>

                <div className='rounded-lg border bg-card text-card-foreground shadow-xl space-y-2 p-4'>
                    <h1 className='text-2xl font-semibold leading-none tracking-tight'>What You'll Learn</h1>
                    <ul>
                        <li className='flex items-center text-xl'><IoCheckmarkDoneCircleSharp size={30} className='text-green-600'/> Master the fundamentals and advanced concepts</li>
                        <li className='flex items-center text-xl'><IoCheckmarkDoneCircleSharp size={30} className='text-green-600'/> Gain practical, hands-on experience</li>
                        <li className='flex items-center text-xl'><IoCheckmarkDoneCircleSharp size={30} className='text-green-600'/> Build real-world projects</li>
                        <li className='flex items-center text-xl'><IoCheckmarkDoneCircleSharp size={30} className='text-green-600'/> Receive certificate upon completion</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default CourseDetails;