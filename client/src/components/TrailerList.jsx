import React from 'react';
import TrailerItem from './TrailerItem';

const TrailerList = ({ trailers, onClick }) => {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {trailers.map((trailer, index) => (
                <TrailerItem key={index} trailer={trailer} onClick={onClick} />
            ))}
        </div>
    );
};

export default React.memo(TrailerList);
