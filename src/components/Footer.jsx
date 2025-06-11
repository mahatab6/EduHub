import React from 'react';
import logo from '../assets/eduhub.png';
import { Link } from 'react-router';
import { FaFacebook, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="EduHub logo" className="w-12" />
              <h1 className="text-2xl font-bold">EduHub</h1>
            </div>
            <p className="text-sm text-gray-300">
              Empowering minds through quality education. <br />
              Join thousands of learners on their journey to success.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about">Home</Link></li>
              <li><Link to="/team">courses</Link></li>
              <li><Link to="/news">About us</Link></li>
              <li><Link to="/contact">Contact </Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Support</h2>
           <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about">Help Center</Link></li>
              <li><Link to="/team">FAQ</Link></li>
              <li><Link to="/news">Privacy Policy</Link></li>
              <li><Link to="/contact">Terms of Service </Link></li>
            </ul>
          </div>
        </div>
       <div className="bg-gray-900">
            <div className="divider divider-info text-white text-sm opacity-70 py-2">Copyright</div>
            <aside className="text-center text-white py-4 text-sm">
                <p>
                © {new Date().getFullYear()} <span className="font-semibold">EduHub</span>. All rights reserved. Built with passion for education.
                </p>
            </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
