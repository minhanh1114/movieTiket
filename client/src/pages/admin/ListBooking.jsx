import React, { useEffect, useState } from 'react';
import Title from '@/components/admin/Title';
import Loading from '@/components/Loading';
import { dummyBookingData } from '@/assets/assets';
import { formatDateTime } from '@/lib/timeFormat';
import BlurPrimary from '@/components/BlurPrimary';

const ListBooking = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(dummyBookingData);
        setIsLoading(false);
    }, []);
    return isLoading ? (
        <Loading />
    ) : (
        <div className="px-6 md:px-14 py-7 w-full max-w-full overflow-hidden">
            <BlurPrimary top="0" left="20%" />
            <Title text1="Admin" text2="Bookings" />
            <div className="border border-primary/50 rounded-lg my-10 overflow-x-auto  w-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Movie Name</th>
                            <th>Show Time</th>
                            <th>Seats</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.user.name}</td>
                                <td>{item.show.movie.title}</td>
                                <td>{formatDateTime(item.show.showDateTime)}</td>
                                <td>{item.bookedSeats.join(', ')}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListBooking;
