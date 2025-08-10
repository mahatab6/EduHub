import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Helmet } from 'react-helmet';
import eduhub from '../assets/eduhub.png'
import contact from '../assets/contact-us.jpg'





const Contact = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
            <title>Contact | EduHub</title>
            </Helmet>
            <div className='flex items-center justify-center py-10 gap-2'>
                <img className='w-[30px]' src={eduhub} alt="" />
                <h1 className='text-2xl font-bold '>Contact</h1>
            </div>

            <h1 className='md:text-4xl text-2xl font-bold text-center '>Get in Touch</h1>

            <div>
                <section className="py-6">
                    <div className="px-5">
                        <p className='text-4xl lg:text-5xl font-extrabold text-center leading-tight py-5'>I will Answer all Your Questions</p>
                        <div className="flex flex-col lg:flex-row justify-items-center  justify-center items-center gap-5">
                            <img className=' rounded-full h-80 w-80' src={contact} alt="" />
                            <div className="space-y-4 pb-10">
                                <p className="flex items-center gap-2">
                                    <FaLocationDot size={45} className="" />
                                   <div>
                                        <p className='text-3xl'>Address</p>
                                        <p className='xl'> 9999 CityDhaka 102, 8000 sent behaibior utl <br /> 1216, road 45 house of street</p>
                                   </div>
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoCall size={45} className="" />
                                   <div>
                                        <p className='text-3xl'>Lets Talk us</p>
                                        <p className='xl'>+8801574896467</p>
                                   </div>
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoMdMail  size={45} className="" />
                                   <div>
                                        <p className='text-3xl'>Mail</p>
                                        <p className='xl'>eduhub@company.com</p>
                                   </div>
                                </p>
                                <div className="flex gap-3 mt-2">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                                </div>
                               
                            </div>
                        </div>
                        <p className='md:text-4xl text-2xl font-bold text-center py-10'>Just Drop Me a Line</p>
                        <form noValidate="" className="flex flex-col max-w-6xl  mx-auto py-6 space-y-6 md:py-0 md:px-6">
                            <div className='flex gap-5'>
                                <label className="block flex-1 ">
                                    <span className="mb-1 text-xl font-medium">Full name</span>
                                    <input type="text" placeholder="Enter your name" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                                </label>
                                <label className="block flex-1">
                                    <span className="mb-1 text-xl font-medium">Email address</span>
                                    <input type="email" placeholder="Enter your email" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                                </label>
                            </div>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Subject</span>
                                <input type="email" placeholder="Subject" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Message</span>
                                <textarea rows="3" placeholder='write your comment' className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 "></textarea>
                            </label>
                            <button type="button" className="self-center w-80  py-2 hover:cursor-pointer text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-purple-600 text-white">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;