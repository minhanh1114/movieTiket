import React, { useCallback, useEffect, useState } from 'react';
import { dummyShowsData } from '@/assets/assets';
import Loading from '@/components/Loading';
import Title from '@/components/admin/Title';
import MovieItem from '@/components/admin/MovieItem';
import ShowItem from '@/components/admin/ShowItem';
import { DollarSign, XIcon } from 'lucide-react';
import Button from '@/components/Button';
const AddShow = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [playingMovie, setPlayingMovie] = useState([]);
    const [formData, setFormData] = useState({ selectedMovie: null, price: null, dateTime: null, dateTimeAdded: {} });
    useEffect(() => {
        setPlayingMovie(dummyShowsData);
        setIsLoading(false);
    }, []);
    const handleSelectMovie = useCallback((id) => {
        console.log(formData);
        setFormData((prev) => ({ ...prev, selectedMovie: id }));
    }, []);
    const handleInputPrice = (e) => {
        setFormData((prev) => ({ ...prev, price: e.target.value }));
    };
    const handleInputDateTime = (e) => {
        setFormData((prev) => ({ ...prev, dateTime: e.target.value }));
    };
    const handleAddDateTime = useCallback(() => {
        if (!formData.dateTime) return;
        const [date, time] = formData.dateTime.split('T');
        const times = formData.dateTimeAdded[date] || [];
        if (!times.includes(time)) {
            setFormData((prev) => ({ ...prev, dateTimeAdded: { ...prev.dateTimeAdded, [date]: [...times, time] } }));
        }
    }, [formData.dateTime, formData.dateTimeAdded]);
    const handleDeleteTime = useCallback((date, time) => {
        setFormData((prev) => {
            return {
                ...prev,
                dateTimeAdded: {
                    ...prev.dateTimeAdded,
                    [date]: prev.dateTimeAdded[date].filter((currentTime) => currentTime !== time),
                },
            };
        });
    }, []);
    const handleAddShow = () => {
        console.log(formData.price, formData.dateTimeAdded);
    };

    return isLoading ? (
        <Loading />
    ) : (
        <div className="px-6 md:px-14 py-7 relative">
            <Title text1="Admin" text2="Add Shows" />
            <div className="flex flex-wrap gap-4 mt-5 group">
                {playingMovie.map((movie) => (
                    <ShowItem
                        key={movie.id}
                        movie={movie}
                        onClick={handleSelectMovie}
                        selectedMovie={formData.selectedMovie}
                    />
                ))}
            </div>
            <div className="flex flex-col items-start gap-3 my-5">
                <div>
                    <label htmlFor="show-price" className="">
                        Show Price
                    </label>
                    <div className="flex-center border border-primary/30 max-w-xs p-2 bg-primary/10 mt-2 rounded-md">
                        <p>
                            <DollarSign className="size-5 text-gray-500" />
                        </p>
                        <input
                            id="show-price"
                            type="number"
                            min={0}
                            className="w-full border-0 outline-none"
                            placeholder="Enter show price"
                            value={formData.price}
                            onChange={handleInputPrice}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="show-datetime" className="">
                        Select Date and Time
                    </label>
                    <div className="flex-center border border-primary/30 max-w-xs p-2 bg-primary/10 mt-2 rounded-md">
                        <input
                            id="show-datetime"
                            type="datetime-local"
                            value={formData.dateTime}
                            onChange={handleInputDateTime}
                            className=" border-0 outline-none text-white"
                        />
                        <Button onClick={handleAddDateTime} primary small className="rounded-lg inline">
                            Add Time
                        </Button>
                    </div>
                </div>
                <div>
                    <p className="">Selected Date Time</p>
                    {formData.dateTimeAdded &&
                        Object.entries(formData.dateTimeAdded).map(([date, times]) => (
                            <div className="flex flex-col gap-2 mt-4">
                                <p>{!!times.length && date}</p>
                                <div className="flex flex-row gap-2">
                                    {times.map((time) => (
                                        <div
                                            className="p-2 border border-primary/50 cursor-pointer inline-flex"
                                            onClick={() => handleDeleteTime(date, time)}
                                        >
                                            {time} <XIcon className="size-5 text-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    <p></p>
                    <div>{console.log(Object.entries(formData.dateTimeAdded))}</div>
                </div>
                <Button onClick={handleAddShow} primary medium className="rounded-lg inline">
                    Add Show
                </Button>
            </div>
        </div>
    );
};

export default AddShow;
