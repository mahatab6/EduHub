import { IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const LatestCourses = ({ latestData }) => {

    
    
    return (
        <div data-aos="fade-up" className='my-8 '>
            <div className='text-center mb-8 '>
                <h1 className='text-4xl font-bold  mb-4 '>Latest Courses</h1>
                <p className='text-xl'>Discover our newest additions to the course catalog</p>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center w-11/12 mx-auto'>
                {
                latestData?.map((course) => (
                    <div key={course?._id} className="card hover:shadow-2xl hover:-translate-y-2 transition duration-300 bg-base-300 shadow-md m-4 p-4">
                        <figure>
                            <img className='h-60 object-cover rounded-t-lg' src={course?.photo} alt={course?.title} />
                            <p className='flex items-center text-white rounded-xl text-base p-1 font-bold bg-purple-500 absolute top-6 right-1 gap-1'><IoTimeOutline size={25} /> {course.duration}</p>
                        </figure>
                        
                        <div className="card-body">
                            <div>
                                <p className="inline-block text-xl font-bold bg-purple-500 text-white px-2 rounded">{course?.level}</p>
                            </div>
                            <h2 className="card-title text-2xl font-semibold">{course?.title}</h2>
                            <p className='text-sm text-muted-foreground mb-4'>{course?.description.slice(0,150)}...</p>
                            <div className='flex items-center gap-2'>
                                <img className=" rounded-full h-12" src={course?.instructorPhoto} alt=""  referrerPolicy=''/> 
                                <p className='text-xl font-bold'>By {course?.instructor}</p>
                            </div>
                            <p className='text-xl font-bold'>${course?.price}</p>
                        </div>
                        <Link to={`/course-details/${course?._id}`} className='btn border-1 border-purple-600 hover:bg-purple-600 hover:text-white rounded-2xl'>Start Learning</Link>
                    </div>
                ))
            }
            </div>
            <div className='text-center my-4'>
                <Link to='/courses' className='text-xl font-bold p-2 bg-black text-white hover:bg-purple-600 rounded-xl'>Enroll Now</Link>
            </div>
        </div>
    );
};

export default LatestCourses;