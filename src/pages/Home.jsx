import React from 'react';
import Banner from './homelayout/Banner';
import Count from './homelayout/Count';
import Choose from './homelayout/Choose';
import Learning from './homelayout/Learning';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Count/>
            <Choose/>
            <Learning/>
        </div>
    );
};

export default Home;