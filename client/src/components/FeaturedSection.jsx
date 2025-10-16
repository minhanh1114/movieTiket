import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import BlurPrimary from './BlurPrimary';
import Button from './Button';
import MovieList from './MovieList';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import movieSlice from '@/features/movies/movieSlice';

const FeaturedSection = () => {
    const navigate = useNavigate();
    const dataMovie = useSelector((state) => state.movies.list);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
            <div className=" relative flex justify-between items-center capitalize pt-20 pb-10">
                <BlurPrimary top="0" right="-80px" />
                <h2 className=" text-lg font-medium md:text-xl ">Now Showing</h2>
                <button className=" group flex-center gap-2 cursor-pointer ">
                    view all{' '}
                    <ArrowRightIcon className="size-5  group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
            </div>
            <div>
                <MovieList dataMovie={dataMovie.slice(0, 5)} />
            </div>
            <div className="flex-center">
                <Button
                    className="rounded-md"
                    medium
                    onClick={() => {
                        navigate('/movies');
                    }}
                >
                    Show More
                </Button>
            </div>
        </div>
    );
};

export default FeaturedSection;
