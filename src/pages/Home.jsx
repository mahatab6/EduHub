import React from 'react';
import Banner from './homelayout/Banner';
import Count from './homelayout/Count';
import Choose from './homelayout/Choose';
import Learning from './homelayout/Learning';
import LatestCourses from './homelayout/LatestCourses';
import FindCourses from './homelayout/FindCourses';
import PopularCourses from './homelayout/PopularCourses';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | EduHub</title>
            </Helmet>
            <Banner/>
            <Count/>
            <LatestCourses/>
            <FindCourses/>
            <PopularCourses/>
            <Choose/>
            <Learning/>
        </div>
    );
};

export default Home;