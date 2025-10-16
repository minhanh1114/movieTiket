import React from 'react';
import Button from './Button';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';
import { timeFormat } from '@/lib/timeFormat';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate(); // Khởi tạo useNavigate
    return (
        <div
            onClick={() => {
                navigate(`/movie/${movie.id}`);
            }}
            className=" group flex flex-col gap-3 rounded-2xl col-span-3 p-3  bg-gray-700 cursor-pointer hover:-translate-y-2 transition-transform duration-300"
        >
            <img src={movie.backdrop_path} alt={movie.title} className="rounded-2xl h-52 w-full object-cover " />
            <h3 className="font-semibold">{movie.title}</h3>
            <p className="truncate text-sm text-gray-300">
                {new Date(movie.release_date).getFullYear() + ' • '}
                {movie.genres
                    .slice(0, 2)
                    .map((genre) => genre.name)
                    .join(' | ') + ' • '}
                {timeFormat(movie.runtime)}
            </p>
            <div className="flex items-center justify-between pb-5">
                <Button
                    onClick={() => {
                        navigate(`/movie/${movie.id}`);
                    }}
                    small
                >
                    Buy Tickets
                </Button>
                <div className="flex-center gap-1">
                    <Star className="size-5 text-primary fill-primary" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
