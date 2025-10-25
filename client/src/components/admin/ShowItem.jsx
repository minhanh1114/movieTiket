import { kFormat } from '@/lib/kFormat';
import { CheckIcon, Star } from 'lucide-react';
import React from 'react';
import classNames from 'classnames';

const ShowItem = ({ movie, onClick, selectedMovie }) => {
    console.log(selectedMovie);

    return (
        <div
            onClick={() => onClick(movie.id)}
            className="relative group-hover:not-hover:opacity-40 hover:translate-y-2 transition-transform duration-300 w-50 cursor-pointer"
        >
            <img src={movie.backdrop_path} alt="" className="w-full h-75 object-cover brightness-120 rounded-lg" />
            <div className="flex justify-between">
                <p className="flex-center gap-1">
                    <Star className="size-5 fill-primary text-primary" /> {movie.vote_average.toFixed(1)}/5
                </p>
                <p>{kFormat(movie.vote_count)} Votes</p>
            </div>
            {selectedMovie === movie.id && (
                <div className="absolute top-2 right-2 p-2 bg-primary rounded-lg">
                    <CheckIcon className="text-while" strokeWidth={4} />
                </div>
            )}
            <h2 className="mt-1 line-clamp-1">{movie.title}</h2>
            <p className="text-gray-500 line-clamp-1">{movie.genres.map((genre) => genre.name).join(',')}</p>
        </div>
    );
};

export default React.memo(ShowItem);
