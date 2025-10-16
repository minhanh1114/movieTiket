import React from 'react';

const CastItem = ({ cast }) => {
    return (
        <div className=" flex flex-col justify-center items-center gap-1">
            <img src={cast.profile_path} alt="" className="object-cover rounded-full h-20 aspect-square" />
            <p className="text-xs">{cast.name}</p>
        </div>
    );
};

export default CastItem;
