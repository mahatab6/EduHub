import { IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const LatestCourses = ({ latestData }) => {

    
    
    return (
        <div data-aos="fade-up" className='py-20 '>
            <div className='text-center mb-8 '>
                <h1 className='text-4xl font-bold  mb-4 '>Latest Courses</h1>
                <p className='text-xl'>Discover our newest additions to the course catalog</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto">
                {latestData?.map((course) => (
                    <div
                    key={course?._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
                    >
                    {/* Image & Duration Tag */}
                    <div className="relative">
                        <img
                        className="h-56 w-full object-cover"
                        src={course?.photo}
                        alt={course?.title}
                        />
                        <span className="absolute top-4 right-4 flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                        <IoTimeOutline size={18} /> {course?.duration}
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
                            <p className="text-lg font-bold text-purple-600">
                            ${course?.price}
                            </p>
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
                ))}
            </div>

                    
        </div>
    );
};

export default LatestCourses;