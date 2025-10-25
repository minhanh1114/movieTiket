import React from 'react';

const Loading = () => {
    return (
        <div className=" flex-center h-screen ">
            <div className="custom-container flex-center">
                <p className="animate-spin h-14 w-14 rounded-full border-5 border-t-primary"></p>
            </div>
        </div>
    );
};

export default Loading;
