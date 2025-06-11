import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";




const Choose = () => {
    return (
        <div className='py-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>Why Choose EduHub?</h1>
                <p className='text-xl text-gray-600 mb-12'>Experience the difference with our unique approach to learning</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-4'>
                <div className='text-center justify-items-center space-y-2'>
                    <FaArrowTrendUp  className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white ' />
                    <h1 className='text-xl font-semibold text-gray-900 mb-4'>Career Growth</h1>
                    <p className='text-gray-600 text-xl'>Advance your career with industry-relevant <br /> skills and certifications</p>
                </div>
                <div className='text-center justify-items-center space-y-2'>
                    <FaUsersGear   className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white ' />
                    <h1 className='text-xl font-semibold text-gray-900 mb-4'>Expert Instructors</h1>
                    <p className='text-gray-600 text-xl'>Learn from professionals with years of real<br />-world experience</p>
                </div>
                <div className='text-center justify-items-center space-y-2'>
                    <IoMdTime   className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white ' />
                    <h1 className='text-xl font-semibold text-gray-900 mb-4'>Flexible Schedule</h1>
                    <p className='text-gray-600 text-xl'>Study at your own pace with lifetime access to<br /> course materials</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;