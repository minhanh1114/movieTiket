import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ dataMovie }) => {
    console.log('render');
    return (
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-9 mb-10">
            {dataMovie.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default React.memo(MovieList);
