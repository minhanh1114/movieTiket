import React, { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import BlurPrimary from './BlurPrimary';
import { dummyTrailers } from '@/assets/assets';
import TrailerList from './TrailerList';

const TrailerSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
    console.log(currentTrailer);

    const handleClickTrailer = useCallback((trailer) => {
        setCurrentTrailer(trailer);
    }, []);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden my-10 flex flex-col gap-8 ">
            <h2 className="text-lg font-medium md:text-xl ">Trailers</h2>
            <div className="relative">
                <BlurPrimary top="0" right="-80px" />
                <ReactPlayer src={currentTrailer.videoUrl} width="100%" height="540px" className="max-w-full" />
            </div>
            <TrailerList trailers={dummyTrailers} onClick={handleClickTrailer} />
        </div>
    );
};

export default TrailerSection;
