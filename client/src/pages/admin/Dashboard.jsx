import React, { useEffect, useState } from 'react';
import Title from '@/components/admin/Title';
import Loading from '@/components/Loading';
import { dummyDashboardData } from '@/assets/assets';
import { ChartArea, CircleDollarSign, Clapperboard, Users } from 'lucide-react';
import MovieItem from '@/components/admin/MovieItem';
import BlurPrimary from '@/components/BlurPrimary';
const Dashboard = () => {
    const [data, setData] = useState({
        totalBookings: 0,
        totalRevenue: 0,
        activeMovies: [],
        totalUser: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const dashboardCard = [
        { title: 'Total Bookings', icon: ChartArea, value: data.totalBookings },
        { title: 'Total Revenue', icon: CircleDollarSign, value: data.totalRevenue },
        { title: 'Total Movies', icon: Clapperboard, value: data.activeMovies.length },
        { title: 'Total User', icon: Users, value: data.totalUser },
    ];
    useEffect(() => {
        setData(dummyDashboardData);

        setIsLoading(false);
    }, []);
    return isLoading ? (
        <Loading />
    ) : (
        <div className="px-6 md:px-14 py-7 relative">
            <BlurPrimary top="0" left="30%" />
            <BlurPrimary bottom="-10%" left="-5%" />
            <BlurPrimary bottom="-10%" right="-5%" />
            <Title text1="Admin" text2="Dashboard" />
            <div className="grid grid-cols-12 gap-4 my-10">
                {dashboardCard.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className=" col-span-12 md:col-span-3 flex flex-row justify-between items-center bg-primary/10 border border-primary/50 py-4 px-5 rounded-lg"
                        >
                            <div className="flex flex-col gap-1 text-base font-light capitalize">
                                <p>{item.title}</p>
                                <p className="font-medium text-xl">{item.value}</p>
                            </div>
                            <Icon className="size-8" />
                        </div>
                    );
                })}
            </div>
            <h2 className="text-xl">Active Movie</h2>
            <div className="grid grid-cols-12 gap-4 mt-5">
                {data.activeMovies.map((activeMovie) => (
                    <MovieItem key={activeMovie._id} activeMovie={activeMovie} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
