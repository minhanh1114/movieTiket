import React from 'react';
import CastItem from './CastItem';

const CastSection = ({ casts }) => {
    return (
        <div className="my-20 ">
            <h2 className="text-xl font-medium mb-10">Your Favorite Cast</h2>
            <div className="overflow-x-auto">
                <div className="flex gap-4  w-max">
                    {casts.slice(0, -1).map((cast, index) => (
                        <CastItem key={index} cast={cast} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CastSection;
