import React from 'react';
import coding from '../../assets/coding.png'
import graphic from '../../assets/graphic-design.png'
import essential from '../../assets/growth.png'
import communication from '../../assets/development.png'

const FindCourses = () => {
    return (
        <div className='py-16 bg-gradient-to-r from-purple-50 to-blue-50'>
           <div className='text-center mb-12 mt-8'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>Explore by Category</h1>
                <p className='text-xl text-gray-600'>Find courses tailored to your interests</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='p-4 rounded-lg border bg-white text-card-foreground shadow-sm h-full text-center hover:shadow-xl transition-shadow card-gradient'>
                    <img className='w-20 mx-auto' src={coding} alt="" />
                    <h1 className='font-semibold tracking-tight text-xl mb-2 text-gray-800'>Development</h1>
                    <p className='text-sm text-gray-600'>Master programming languages and build amazing applications.</p>
                </div>
                <div className='p-4 rounded-lg border bg-white text-card-foreground shadow-sm h-full text-center hover:shadow-xl transition-shadow card-gradient'>
                    <img className='w-20 mx-auto' src={graphic} alt="" />
                    <h1 className='font-semibold tracking-tight text-xl mb-2 text-gray-800'>Design</h1>
                    <p className='text-sm text-gray-600'>Unleash your creativity with courses in UI/UX and graphic design.</p>
                </div>
                <div className='p-4 rounded-lg border bg-white text-card-foreground shadow-sm h-full text-center hover:shadow-xl transition-shadow card-gradient'>
                    <img className='w-20 mx-auto' src={essential} alt="" />
                    <h1 className='font-semibold tracking-tight text-xl mb-2 text-gray-800'>Business</h1>
                    <p className='text-sm text-gray-600'>Learn essential business skills from marketing to finance.</p>
                </div>
                <div className='p-4 rounded-lg border bg-white text-card-foreground shadow-sm h-full text-center hover:shadow-xl transition-shadow card-gradient'>
                    <img className='w-20 mx-auto' src={communication} alt="" />
                    <h1 className='font-semibold tracking-tight text-xl mb-2 text-gray-800'>Personal Development</h1>
                    <p className='text-sm text-gray-600'>Grow your skills in leadership, communication, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default FindCourses;