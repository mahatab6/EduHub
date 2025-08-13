import React  from 'react';
import CountUp from 'react-countup';
import Lottie from "lottie-react";
import Students  from '../../assets/Animation/Animation - 1750033552111.json'
import Courses from '../../assets/Animation/Animation - 1750034171266.json'
import Certificates from '../../assets/Animation/Animation - 1750034566935.json'
import Rating from '../../assets/Animation/Animation - 1750034830618.json'





const count = () => {
    return (
        <div className='py-20 bg-gray-50 grid lg:grid-cols-4 grid-cols-2 gap-4'>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'150px', }} animationData={Students}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={10000} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Active Students</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'150px', height:'150px' }} animationData={Courses}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={500} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Courses Available</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'150px', height:'150px' }} animationData={Certificates}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={25000} /> <span className='text-3xl font-bold text-gray-900'>+</span>
                <p className='text-gray-600 text-xl'>Certificates Issued</p>
            </div>
            <div className='text-center justify-items-center space-y-2'>
                <Lottie style={{width:'150px', height:'150px' }} animationData={Rating}  loop={true} ></Lottie>
                <CountUp className='text-3xl font-bold text-gray-900 mb-2' end={99} /> <span className='text-3xl font-bold text-gray-900'>/100</span>
                <p className='text-gray-600 text-xl'>Average Rating</p>
            </div>
        </div>
    );
};

export default count;