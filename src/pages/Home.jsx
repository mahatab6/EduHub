import React, { useEffect, useState } from 'react';
import Banner from './homelayout/Banner';
import Count from './homelayout/Count';
import Choose from './homelayout/Choose';
import Learning from './homelayout/Learning';
import LatestCourses from './homelayout/LatestCourses';
import FindCourses from './homelayout/FindCourses';
import PopularCourses from './homelayout/PopularCourses';
import { Helmet } from 'react-helmet';
import CourseMarquee from './homelayout/CourseMarquee';
import Loading from './Loading';
import axios from 'axios';
import Marketplace from './homelayout/Marketplace';



const Home = () => {

    const [loading, setLoading] = useState(true);

    const [latestData, setLatestData] = useState([]);
    useEffect(()=>{
        axios.get('https://eduhub-coral.vercel.app/latest-courses')
        .then(data => {
            setLatestData(data?.data);
            
        })
        .finally(()=> setLoading(false));
    },[setLoading])
    
    if(loading){
        return <Loading/>;
    }

    return (
        <div>
            <Helmet>
                <title>Home | EduHub</title>
            </Helmet>
            <Banner/>
            <Count/>
            <LatestCourses latestData = {latestData}/>
            <FindCourses/>
            <CourseMarquee/>
            <Marketplace/>
            <PopularCourses />
            <Choose/>
            <Learning/>
        </div>
    );
};

export default Home;