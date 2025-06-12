import React, { useContext, useState } from 'react';
import logo from '../assets/eduhub.png';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {signUp, profile} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.confirmPassword.value;

    if(password != conPassword){
      toast.error('Password or Confirm Password does not match', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      return;
    }

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegExp.test(password)) {
          toast.error('Password must be at least 6 characters long and include both uppercase and lowercase letters.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          return;
          }

    signUp(email,password)
    .then(() => {
      profile({displayName:name, photoURL: photoURL})
      toast.success('successfully Sign Up', {
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
    })
    .catch(() => {
      toast.error('sign up failed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    });

    
    console.log(name, photoURL, email, password, conPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full max-w-md p-8 m-6 sm:p-10 bg-card text-card-foreground dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-2xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="EduHub Logo" className="w-24 h-24" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Join EduHub</h1>
          <p className="text-sm text-gray-600 dark:text-gray-600">
            Create your account to start learning
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                required
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
                required
                type="text"
                id="photo"
                name="photourl"
                placeholder="Enter your photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div className="relative mb-4">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              <div
                className="absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </div>
            </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
            </div>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <div
              className="absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(prev => !prev)}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
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
