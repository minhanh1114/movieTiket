import { standardTimeFormat } from '@/lib/timeFormat';
import { Star } from 'lucide-react';
import React from 'react';

const MovieItem = ({ activeMovie }) => {
    return (
        <div className="col-span-6 md:col-span-4 pb-4 bg-primary/10 border border-primary/50 rounded-lg cursor-pointer">
            <img src={activeMovie.movie.backdrop_path} alt="movie" className="w-full rounded-t-lg" />
            <div className="px-2">
                <p className=" mt-3 line-clamp-1">{activeMovie.movie.title}</p>
                <div className="flex justify-between  my-2 ">
                    <p>${activeMovie.showPrice}</p>
                    <p className="flex-center gap-1">
                        <Star className="size-5 fill-primary text-primary" />{' '}
                        {activeMovie.movie.vote_average.toFixed(1)}
                    </p>
                </div>
                <p className="text-xs text-gray-300">{standardTimeFormat(activeMovie.showDateTime)}</p>
            </div>
        </div>
    );
};

export default MovieItem;
