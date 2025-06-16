import React  from 'react';
import CountUp from 'react-countup';
import { LuUsers } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaStarHalfAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import Students  from '../../assets/Animation - 1750033552111.json'
import Courses from '../../assets/Animation - 1750034171266.json'
import Certificates from '../../assets/Animation - 1750034566935.json'
import Rating from '../../assets/Animation - 1750034830618.json'





const count = () => {
    return (
        <div className='py-16 bg-gray-50 grid lg:grid-cols-4 grid-cols-2 gap-4'>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'200px', }} animationData={Students}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={10000} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Active Students</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'200px', height:'200px' }} animationData={Courses}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={500} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Courses Available</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'200px', height:'200px' }} animationData={Certificates}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={25000} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Certificates Issued</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'200px', height:'200px' }} animationData={Rating}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={4} /> <span className='text-3xl font-bold text-gray-900'>/5</span>
                <p className='text-gray-600 text-xl'>Average Rating</p>
            </div>
        </div>
    );
};

export default count;