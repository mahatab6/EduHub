import React, { useEffect, useState } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { Link, useLocation } from 'react-router';
import axios from 'axios';
import Loading from './Loading';
import { Helmet } from 'react-helmet';

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [allCourses, setAllCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category"); 

  useEffect(() => {
    axios.get('https://course-server-tan.vercel.app/all-courses')
      .then((res) => {
        const all = res.data;
        setAllCourses(all);

        if (selectedCategory) {
          const filtered = all.filter(course =>
            course.title.toLowerCase().includes(selectedCategory.toLowerCase())
          );
          setCourseData(filtered);
        } else {
          setCourseData(all);
        }

        setLoading(false);
      });
  }, [selectedCategory]);

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);

    const filtered = allCourses.filter(course =>
      course.title.toLowerCase().includes(text.toLowerCase()) ||
      course.description.toLowerCase().includes(text.toLowerCase())
    );

    setCourseData(filtered);
  };

  if (loading) return <Loading />;

  return (
    <div className='min-h-screen'>
      <Helmet>
        <title>All Courses | EduHub</title>
      </Helmet>

      <div className='text-center py-16 bg-gradient-to-r from-purple-600 to-blue-600 mb-4'>
        <h1 className='text-5xl font-bold text-white mb-4'>All Courses</h1>
        <p className='text-xl text-white mb-4'>
          Discover amazing courses and start your learning journey
        </p>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search courses..."
          className="w-80 p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center py-10 w-10/12 mx-auto'>
        {courseData.length === 0 ? (
          <p className='text-gray-500 text-lg'>No courses found.</p>
        ) : (
          courseData.map((course) => (
            <div key={course._id} className="card hover:shadow-2xl bg-base-100 shadow-md m-4 p-4">
              <figure>
                <img className='w-full h-48 object-cover rounded-t-lg' src={course.photo} alt={course.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{course.title}</h2>
                <p className='text-sm text-muted-foreground mb-4'>{course.description}</p>
                <div className='flex justify-around pt-3'>
                  <p className='flex items-center gap-1'><IoTimeOutline />{course.duration}</p>
                  <p className='flex items-center gap-1'><FaUserFriends /> 0 enrolled</p>
                </div>
                <div className='flex justify-around'>
                  <p>By {course.instructor}</p>
                  <p>Created: {course.created}</p>
                </div>
              </div>

              <Link to={`/course-details/${course._id}`} className='btn bg-purple-600 text-white rounded-2xl'>
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
