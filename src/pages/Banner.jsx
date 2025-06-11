import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg1 from '../assets/b-bg-1.jpg';
import image1 from '../assets/banner1.jpg';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-b-xl mb-5"
            style={{
              background: `url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(60%)',
              zIndex: 0,
            }}
          ></div>

          <div className="relative z-10 flex flex-col-reverse md:flex-row py-20 items-center px-8">
            <motion.div
              className="text-white md:px-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="md:text-3xl text-xl font-bold pt-5">
                Transform Your Future with Quality Education
              </h1>
              <p className="mt-4">
                Join thousands of learners and unlock your potential with our comprehensive courses
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded">
                Explore Courses
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img className="rounded-2xl" src={image1} alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-b-xl mb-5"
            style={{
              background: `url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(60%)',
              zIndex: 0,
            }}
          ></div>
          <div className="relative z-10 flex flex-col-reverse md:flex-row py-20 items-center px-8">
            <motion.div
              className="text-white md:px-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="md:text-3xl text-xl font-bold pt-5">
                Flexible Learning at Your Pace
              </h1>
              <p className="mt-4">
                Study anytime, anywhere with our mobile-friendly platform
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded">
                Explore Courses
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img className="rounded-2xl" src={image1} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
