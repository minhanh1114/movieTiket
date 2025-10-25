import React, { useEffect, useState } from 'react';
import Title from '@/components/admin/Title';
import Loading from '@/components/Loading';
import { dummyDashboardData } from '@/assets/assets';
import { standardTimeFormat } from '@/lib/timeFormat';
import BlurPrimary from '@/components/BlurPrimary';

const ListShow = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(dummyDashboardData.activeMovies);
        setIsLoading(false);
    }, []);
    return isLoading ? (
        <Loading />
    ) : (
        <div className="px-14 py-7 relative">
            <BlurPrimary top="0" left="20%" />
            <Title text1="Admin" text2="Shows" />
            <div className="border border-primary/50 rounded-lg overflow-x-auto my-10 w-full ">
                <table class="table-fixed w-full">
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Show Time</th>
                            <th>Total Booking</th>
                            <th>Earning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.movie.title}</td>
                                <td>{standardTimeFormat(item.showDateTime)}</td>
                                <td>{Object.keys(item.occupiedSeats).length}</td>
                                <td>{Object.keys(item.occupiedSeats).length * item.showPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListShow;
