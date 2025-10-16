import { PlayCircleIcon } from 'lucide-react';
import React from 'react';

const TrailerItem = ({ trailer, onClick }) => {
    return (
        <div
            onClick={() => onClick(trailer)}
            className="relative flex-center cursor-pointer col-span-2 hover:-translate-y-2 transition-transform duration-300"
        >
            <img src={trailer.image} alt="" className="rounded-lg" />
            <PlayCircleIcon className="size-15 absolute " />
        </div>
    );
};

export default TrailerItem;
