import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '@/assets/assets';
import BookingItem from '@/components/BookingItem';
import Loading from '@/components/Loading';
import BlurPrimary from '@/components/BlurPrimary';

const MyBooking = () => {
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState('');
    useEffect(() => {
        setBookings(dummyBookingData);
        setLoading(true);
    }, []);
    return loading ? (
        <div className="flex-center">
            <div className="custom-container">
                <h1 className="text-xl font-semibold">My Booking</h1>
                <div className="flex flex-col gap-5 my-10 relative">
                    <BlurPrimary top="-15%" left="20%" />

                    {bookings.map((booking, index) => (
                        <BookingItem key={index} booking={booking} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default MyBooking;
