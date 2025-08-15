import React, { useEffect, useState } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router';
import axios from 'axios';
import Loading from './Loading';
import { Helmet } from 'react-helmet';

// 🔹 Reusable Course Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image & Duration */}
      <div className="relative">
        <img
          className="h-56 w-full object-cover"
          src={course?.photo}
          alt={course?.title}
        />
        <span className="absolute top-4 right-4 flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          <IoTimeOutline size={18} /> {course.duration}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <span className="text-xs font-semibold uppercase bg-purple-100 text-purple-700 px-2 py-1 rounded w-fit">
          {course?.level}
        </span>

        <h2 className="text-lg font-bold text-gray-800 leading-snug">
          {course?.title}
        </h2>

        <p className="text-sm text-gray-600">
          {course?.description.slice(0, 120)}...
        </p>

          {/* Instructor Info */}
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-3 mt-auto">
            <img
              className="h-10 w-10 rounded-full object-cover border"
              src={course?.instructorPhoto}
              alt={course?.instructor}
            />
            <p className="text-sm font-medium text-gray-800">
              By {course?.instructor}
            </p>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-purple-600">${course?.price}</p>
        </div>  
      </div>

      {/* Button */}
      <Link
        to={`/course-details/${course?._id}`}
        className="m-5 mt-0 block text-center bg-purple-600 text-white font-semibold py-2 rounded-full hover:bg-purple-700 transition"
      >
        Start Learning
      </Link>
    </div>
  );
};

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [allCourses, setAllCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    axios.get(`https://eduhub-coral.vercel.app/all-courses?sortBy=price&order=${sortOrder}`)
      .then((res) => {
        const all = res.data;
        setAllCourses(all);

        if (selectedCategory) {
          setCourseData(all.filter(course =>
            course.title.toLowerCase().includes(selectedCategory.toLowerCase())
          ));
        } else {
          setCourseData(all);
        }

        setLoading(false);
      });
  }, [selectedCategory, sortOrder]);

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);

    setCourseData(allCourses.filter(course =>
      course.title.toLowerCase().includes(text.toLowerCase()) ||
      course.description.toLowerCase().includes(text.toLowerCase())
    ));
  };

  if (loading) return <Loading />;

  return (
    <div className='min-h-screen'>
      <Helmet>
        <title>All Courses | EduHub</title>
      </Helmet>

      {/* Header & Filters */}
      <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600 mb-4'>
        <h1 className='text-5xl font-bold text-white mb-4'>All Courses</h1>
        <p className='text-xl text-white mb-6'>
          Discover amazing courses and start your learning journey
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Search */}
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search courses..."
            className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Sort */}
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-3 rounded-lg bg-white"
            value={sortOrder}
          >
            <option value="" disabled>Select Price Range</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 w-11/12 mx-auto'>
        {courseData.length === 0 ? (
          <p className='text-gray-500 text-lg'>No courses found.</p>
        ) : (
          courseData.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
