import React from 'react';
import work from '../../assets/working from home.jpg';
import webcam from '../../assets/webcam group.jpg';
import young from '../../assets/young indian woman.jpg';
import glasses from '../../assets/glasses using laptop.jpg';
import computer from '../../assets/Computer Wearing.jpg';
import skill from '../../assets/skill job workforce.jpg';
import { Link } from 'react-router';

const Marketplace = () => {
    return (
        <div className="w-11/12 mx-auto py-20 px-5">
            <div className="flex flex-col xl:flex-row gap-5">
               
                <div className="flex-1">
                    <p className="inline-block p-2 rounded-2xl text-white my-5 text-xl font-bold bg-purple-600">
                        MARKETPLACE
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                        Decentralized <br /> Marketplace for <br /> Digital Artwork
                    </h2>
                    <p className="text-lg lg:text-xl font-medium py-5">
                        The world of art has evolved dramatically with the rise of digital technology, 
                        giving birth to a thriving marketplace for digital artwork. This modern platform 
                        connects talented artists with global audiences, enabling the buying, selling, 
                        and showcasing of art without the limitations of physical space. From illustrations, 
                        3D renders, and animations to NFTs and interactive media, digital art marketplaces 
                        are redefining how creativity is shared and monetized.
                    </p>
                    <div className='py-5'>
                        <Link to='/courses' className='text-xl text-center font-bold p-3 bg-black text-white hover:bg-purple-600 rounded-xl'>Explore Now</Link>
                    </div>
                </div>

              
                <div className="flex-1 flex flex-col gap-5 ">
                  
                    <div className="flex justify-between gap-5">
                        <img className="rounded-full h-30 md:h-50 w-3/8 object-cover" src={work} alt="" />
                        <img className="rounded-lg h-30 md:h-50 w-5/8 object-cover" src={webcam} alt="" />
                    </div>
                    
                    <div className="flex justify-between gap-5">
                        <img className="rounded-lg h-30 md:h-50 w-5/8 object-cover" src={skill} alt="" />
                        <img className="rounded-full h-30 md:h-50 w-3/8 object-cover" src={glasses} alt="" />
                    </div>
                 
                    <div className="flex justify-between gap-5">
                        <img className="rounded-full h-30 md:h-50 w-3/8 object-cover" src={young} alt="" />
                        <img className="rounded-lg h-30 md:h-50 w-5/8 object-cover" src={computer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
