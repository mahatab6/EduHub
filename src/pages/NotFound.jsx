import React from 'react';
import logo from '../assets/eduhub.png'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className='min-h-screen bg-base-200 flex items-center justify-center'>
            <Helmet>
                <title>404-page | EduHub</title>
            </Helmet>
            <div className='text-center items-center justify-items-center '>
                <img src={logo} alt="" />
                <h1 className='text-4xl font-bold'>404</h1>
                <p className='text-xl font-medium'>Sorry, we can't find the page you are looking for.</p>
                <p className='text-xl font-medium'>Please go to <Link className='font-bold hover:underline text-purple-600' to="/">Home</Link>.</p>
            </div>
        </div>
    );
};

export default NotFound;