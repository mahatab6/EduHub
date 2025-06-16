import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from '../../assets/banner.jpg'
import bg from '../../assets/b-bg.jpg'
import industry from '../../assets/banner1.jpg'
import Fuel from '../../assets/b-bg-1.jpg'
import { Link } from 'react-router';
import { motion } from "motion/react"


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const MotionLink = motion(Link);

  const [isMobile, setIsmobile] = useState(false);

  useEffect(() =>{
    const handleAnimation = () =>{
      const width = window.innerWidth;
      if(width < 768){
        setIsmobile("md")
      }
      else if(width < 1024){
        setIsmobile("lg")
      }

      else (setIsmobile("xl"));
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    return()=> window.removeEventListener("resize",handleAnimation);
  },[])

  return (
    
      <Slider {...settings}>
        <div>
          <div className='flex flex-col-reverse space-y-3 p-4 md:flex-row justify-around items-center space-x-2' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
              <motion.div
              animate={{
                x: ((isMobile === "xl") ? 30 : 0) || ((isMobile === "lg") ? 10: 0) ,
                transition:{duration:2}
              }}
              >
                <img className='w-2xl rounded-2xl border-white md:border-r-20 md:border-b-20' src={Skills} alt="" />
              </motion.div>

              <motion.div
              animate={{
                x: ((isMobile === "xl") ? 30 : 0) || ((isMobile === "lg") ? 20: 0) ,
                transition:{duration: 2}
              }}
              >
                <div className='bg-gradient-to-r from-black-50 to-orange-300 shadow-2xl p-4 rounded-xl'>
                  <h2 className='lg:text-5xl text-2xl font-bold text-white '>Upgrade Your Skills for <br /> the Future</h2>
                  <p className='text-xl lg:text-2xl font-medium text-white pt-3'>Get expert-led courses that help you stay ahead in your career.</p>
                </div>
                <MotionLink
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                to="/courses" className="mt-4 px-4 py-2 bg-white text-purple-600 rounded btn font-bold mb-2">Explore Courses</MotionLink>
              </motion.div>
          </div>
        </div>

        <div>
          <div className='flex flex-col space-y-3 p-4 md:flex-row justify-around items-center space-x-2' style={{backgroundImage: `url(${Fuel})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
              <motion.div
              animate={{
                x: ((isMobile === "xl") ? 30 : 0) || ((isMobile === "lg") ? 20: 0) ,
                transition:{duration: 2}
              }}
              >
                <div className='bg-gradient-to-r from-black-50 to-[#C3DBE5] p-4 rounded-xl shadow-2xl'>
                  <h2 className='lg:text-5xl text-2xl font-bold '>Fuel Your Passion with Knowledge</h2>
                  <p className='text-xl lg:text-2xl font-medium pt-3'>Access high-quality content from industry-leading instructors.</p>
                </div>
                <MotionLink
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                to="/courses" className="mt-4 px-4 py-2 bg-white text-purple-600 rounded btn font-bold mb-2">Explore Courses</MotionLink>
              </motion.div>

              <motion.div
              animate={{
                x: ((isMobile === "xl") ? 30 : 0) || ((isMobile === "lg") ? 10: 0) ,
                transition:{duration:2}
              }}
              >
                <img className='w-2xl rounded-2xl border-white md:border-l-20 md:border-b-20' src={industry} alt="" />
              </motion.div>
          </div>
        </div>
        
    </Slider>
    
  );
};

export default Banner;