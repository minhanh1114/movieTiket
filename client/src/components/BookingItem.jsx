import { standardTimeFormat, timeFormat2 } from '@/lib/timeFormat';
import React from 'react';
import Button from './Button';

const BookingItem = ({ booking }) => {
    return (
        <div className="max-w-4xl bg-primary/10 border border-primary/30 p-2 rounded-md">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mr-3">
                <img
                    src={booking.show.movie.poster_path}
                    alt=""
                    className=" h-auto w-30 md:w-51 max-h-30 object-cover m-auto"
                />
                <div className="flex flex-col flex-1 justify-between">
                    <div className="flex flex-row justify-between">
                        <div className="self-start">
                            <h2 className=" text-lg md:text-xl">{booking.show.movie.title}</h2>
                            <p className="text-gray-300 text-xs md:text-base">
                                {timeFormat2(booking.show.movie.runtime)}
                            </p>
                        </div>
                        <div className="flex-center gap-2">
                            <p className="text-lg md:text-xl">${booking.amount}</p>
                            {!booking.isPaid && (
                                <Button small primary className="rounded-lg">
                                    Pay now
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-end text-xs md:text-base">
                        <p className="text-gray-300">{standardTimeFormat(booking.show.showDateTime)}</p>
                        <div>
                            <p className="text-gray-300 ">Total Tickets: {booking.bookedSeats.length} </p>
                            <p className="text-gray-300 ">Seat Number: {booking.bookedSeats.join(',')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingItem;
