import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/eduhub.png'
import { AuthContext } from '../context/AuthContext';
import { Bounce, toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
      const navigate = useNavigate();


    const handleLogout = () =>{
        logOut()
        .then(() => {
            toast.success('Successfully LogOut', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
                navigate('/');
            })
    }

    const link =(
        <>
            <li>
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>courses</NavLink>
            </li>
            <li>
                <NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>Contact Us</NavLink>
            </li>
            {
                user ?(
                    <>
                    <li>
                <NavLink to="/add-course" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>Add Course
                </NavLink>
            </li>
            <li>
                <NavLink to="/manage-courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>Manage Courses</NavLink>
            </li>
            <li>
                <NavLink to="/my-enrolled-courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({isActive})=> isActive? "text-sm font-medium transition-colors hover:text-purple-600 text-purple-600" : ""}>My Enrollments</NavLink>
            </li>
            </>
                ):(
                    ""
                )
            }
        </>
    )
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar  w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}

                        <NavLink to="/login" className="btn">Login</NavLink>
                        <NavLink to="/register" className="btn">Sign Up</NavLink>
                            
                        
                    </ul>
                    </div>
                    <Link to='/' className='flex items-center gap-1'>
                        <img className='w-[50px] rounded-2xl' src={logo} alt="" />
                        <a className="text-2xl font-bold text-gradient">EduHub</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <ThemeToggle/>
                    {
                        user? (
                        <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="avatar ">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ">
                                    <img src={user.photoURL} />
                                </div>
                            </div>  
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <h1 className='text-xl font-medium'>{user?.displayName}</h1>
                                <p className='text-base p-1'>{user.email}</p>
                                <Link onClick={handleLogout} className='btn'>Log out</Link>
                            </ul>
                        </div>
                        </>) : 

                        (

                            <div className='hidden lg:inline-block space-x-3'>
                                <NavLink to="/login" className="btn ">Login</NavLink>
                                <NavLink to="/register" className="btn ">Sign Up</NavLink>
                            </div>
                            
                        )
                        
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;