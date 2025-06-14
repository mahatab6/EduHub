import React from 'react';
import Banner from './homelayout/Banner';
import Count from './homelayout/Count';
import Choose from './homelayout/Choose';
import Learning from './homelayout/Learning';
import LatestCourses from './homelayout/LatestCourses';
import FindCourses from './homelayout/FindCourses';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Count/>
            <LatestCourses/>
            <FindCourses/>
            <Choose/>
            <Learning/>
            
        </div>
    );
};

export default Home;