import React from 'react';
import Lottie from "lottie-react";
import loadingImg from '../assets/Animation/Animation - 1750036129030.json'

const Loading = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center text-center bg-base-200">
                <Lottie style={{height:"200px"}} animationData={loadingImg} loop={true} />;
            </div>            
        </div>
    );
};

export default Loading;