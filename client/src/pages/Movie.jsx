import React from 'react';
import MovieList from '@/components/MovieList';
import BlurPrimary from '@/components/BlurPrimary';
import { useSelector, useDispatch } from 'react-redux';
import movieSlice from '@/features/movies/movieSlice';

const Movie = () => {
    const dataMovie = useSelector((state) => state.movies.list);
    return dataMovie ? (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden my-40 relative">
            <BlurPrimary top="100px" left="0" />
            <h2 className=" text-lg font-medium md:text-xl mb-10">Now Showing</h2>
            <MovieList dataMovie={dataMovie} />
            <BlurPrimary bottom="50px" right="0" />
        </div>
    ) : (
        <div className="flex-center">No movie available</div>
    );
};

export default Movie;
