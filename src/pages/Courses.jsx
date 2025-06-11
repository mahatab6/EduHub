import React from 'react';

const Courses = () => {
    return (
        <div>
            <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600'>
                <h1 className='text-5xl font-bold text-white mb-4'>All Courses</h1>
                <p className='text-xl text-white mb-4'>Discover amazing courses and start your learning journey</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search"  className="focus:outline-none focus:border-none"/>
                    </label>
                </div>
            </div>
            
        </div>
    );
};

export default Courses;