import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/eduhub.png'

const Navbar = () => {
    const link =(
        <>
            <li>
                <NavLink to="/" className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/courses" className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>courses</NavLink>
            </li>
        </>
    )
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar  w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-[50px] rounded-2xl' src={logo} alt="" />
                        <a className="text-2xl font-bold text-gradient">EduHub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <NavLink to="/login" className="btn">Login</NavLink>
                    <NavLink to="/register" className="btn">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;