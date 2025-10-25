import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { HeartIcon, PlayCircleIcon, StarIcon } from 'lucide-react';
import { timeFormat } from '@/lib/timeFormat';
import Button from '@/components/Button';
import CastSection from '@/components/CastSection';
import SelectDate from '@/components/SelectDate';
// fixed cứng
import { dummyDateTimeData } from '@/assets/assets';
import MovieList from '@/components/MovieList';
import Loading from '@/components/Loading';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const movies = useSelector((state) => state.movies.list);
    useEffect(() => {
        setMovie(movies.find((data) => data._id == id));
    }, [id]);

    return movie ? (
        <div className=" flex flex-col justify-center items-center ">
            <div className="custom-container">
                <div className="flex flex-col md:flex-row items-start justify-start gap-8">
                    <div>
                        <img src={movie.poster_path} alt="" className="h-105 max-w-70 rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-primary uppercase font-medium">English</p>
                        <h1 className="text-3xl font-bold text-balance max-w-90">{movie.title}</h1>
                        <div className="flex gap-2 ">
                            <StarIcon className="fill-primary size-5 text-primary" />
                            <span>{movie.vote_average.toFixed(1)} User Rating</span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xl tracking-wide">{movie.overview}</p>
                        <p>
                            {timeFormat(movie.runtime) +
                                ' • ' +
                                movie.genres.map((genre) => genre.name).join(' | ') +
                                ' • ' +
                                movie.release_date.split('-')[0]}
                        </p>
                        <div className="flex gap-4 mt-5">
                            <Button medium secondary>
                                <PlayCircleIcon className="size-6" />
                                watch trailer
                            </Button>
                            <Button medium className="rounded-lg ">
                                <a href="#selectDate">Buy Ticket</a>
                            </Button>
                            <Button secondary className="p-3 rounded-full">
                                <HeartIcon className="size-5" />
                            </Button>
                        </div>
                    </div>
                </div>
                <CastSection casts={movie.casts} />
                <SelectDate dateTime={dummyDateTimeData} id={id} />
                <div className="my-20">
                    <h2 className="text-xl font-medium capitalize my-10">You may also like</h2>
                    <MovieList dataMovie={movies} />
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default MovieDetail;
// text-balance : className giúp cân bằng văn bản trong tiêu đề, làm cho nó dễ đọc hơn và trông đẹp mắt hơn
