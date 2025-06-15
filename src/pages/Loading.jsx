import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center text-center bg-base-200">
                <span className="loading loading-spinner loading-xl"></span>
            </div>            
        </div>
    );
};

export default Loading;