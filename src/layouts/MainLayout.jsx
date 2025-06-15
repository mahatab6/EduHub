import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar/>
            </header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;