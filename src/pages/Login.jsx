import React from 'react';
import logo from '../assets/eduhub.png';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full max-w-md p-8 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="EduHub Logo" className="w-24 h-24" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-600 dark:text-gray-600">
            Sign in to your EduHub account
          </p>
        </div>
        <form noValidate className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 hover:underline dark:text-gray-600">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
            >
              Sign in
            </button>
            <p className="text-sm text-center text-gray-600 dark:text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-violet-600 hover:underline">
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
