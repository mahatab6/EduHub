import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ScrollToTop from '../routes/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <header className='sticky top-0 z-50'>
                <Navbar/>
            </header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;