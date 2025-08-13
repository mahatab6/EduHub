import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Helmet } from 'react-helmet';
import eduhub from '../assets/eduhub.png'





const Contact = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <Helmet>
            <title>Contact | EduHub</title>
            </Helmet>
            <div className='flex items-center justify-center pt-5 pb-20 gap-2'>
                <img className='w-[60px]' src={eduhub} alt="" />
                <h1 className='text-6xl font-bold '>Contact</h1>
            </div>

            <div>
                <section className="py-6">
                    <div className=" md:flex  justify-between gap-5">
                        <div className="flex-1  space-y-4 items-center gap-5">
                            <h2 className='text-4xl font-bold'>Get in Touch</h2>
                            <p className='text-2xl font-semibold'>I will Answer all Your Questions</p>
                            <p className='text-xl '>We're always here to help with court bookings, membership inquiries, or general support. Reach out anytime!</p>
                            <div className="space-y-5 pb-10">
                                <p className="flex  gap-2">
                                    <FaLocationDot size={30} className="" />
                                   <div>
                                        <p className='text-3xl'>Address</p>
                                        <p className='xl'> 9999 CityDhaka 102, 8000 sent behaibior utl <br /> 1216, road 30 house of street</p>
                                   </div>
                                </p>
                                <p className="flex  gap-2">
                                    <IoCall size={30} className="" />
                                   <div>
                                        <p className='text-3xl'>Lets Talk us</p>
                                        <p className='xl'>+8801574896467</p>
                                   </div>
                                </p>
                                <p className="flex  gap-2">
                                    <IoMdMail  size={30} className="" />
                                   <div>
                                        <p className='text-3xl'>Mail</p>
                                        <p className='xl'>eduhub@company.com</p>
                                   </div>
                                </p>
                                <div className="flex gap-5 ">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                                </div>
                               
                            </div>
                        </div>

                        <form noValidate="" className="flex flex-1 flex-col space-y-8 p-10 shadow-2xl rounded-2xl">
                            <p className='md:text-4xl text-2xl font-bold text-center py-10'>Just Drop Me a Line</p>

                            <div className='flex gap-5'>
                                <label className="block flex-1 ">
                                    <span className="mb-1 text-xl font-medium">Full name</span>
                                    <input type="text" placeholder="Enter your name" className="block p-3 w-full  rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
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
                            <button type="button" className="self-center w-full  py-2 hover:cursor-pointer text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-purple-600 text-white">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;