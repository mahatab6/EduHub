import React from 'react';
import logo from '../assets/eduhub.png';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full max-w-md p-8 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="EduHub Logo" className="w-24 h-24" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Join EduHub</h1>
          <p className="text-sm text-gray-600 dark:text-gray-600">
            Create your account to start learning
          </p>
        </div>
        <form  className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-1 text-sm font-medium">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Enter your photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
            >
              Create Account
            </button>
            <p className="text-sm text-center text-gray-600 dark:text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-violet-600 hover:underline">Sign in.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
