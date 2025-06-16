import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router';

const Learning = () => {
    const MotionLink = motion(Link)
    return (
        <div>
            <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600'>
                <h1 className='text-4xl font-bold text-white mb-4'>Ready to Start Learning?</h1>
                <p className='text-xl text-white mb-4'>Join our community of learners and transform your career today</p>
                <div className=' space-x-2'>
                    <MotionLink 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    to="/courses" className="btn">Browse Courses</MotionLink>
                    <MotionLink 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    to="/register" className="btn text-purple-600">Sign Up Free</MotionLink>
                </div>
            </div>
        </div>
    );
};

export default Learning;