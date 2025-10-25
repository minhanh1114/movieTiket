import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import Loading from '@/components/Loading';
import { assets, dummyDateTimeData } from '@/assets/assets';
import Button from '@/components/Button';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { iosTimeFormat } from '@/lib/timeFormat';
import classNames from 'classnames';
import toast from 'react-hot-toast';
import SeatList from '@/components/SeatList';
import BlurPrimary from '@/components/BlurPrimary';

const Seat = () => {
    const groupRow = [
        ['A', 'B'],
        ['C', 'D'],
        ['E', 'F'],
        ['G', 'H'],
        ['I', 'J'],
    ];
    const { id, date } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const movies = useSelector((state) => state.movies.list);
    useEffect(() => {
        setMovie(movies.find((data) => data._id == id));
    }, [id]);
    const handleSelectTime = (time) => {
        setSelectedTime(time);
        setSelectedSeat([]);
    };
    const handleSelectSeat = (seat) => {
        if (!selectedTime) {
            return toast.error('Please select a time first');
        }
        if (selectedSeat.includes(seat)) {
            setSelectedSeat((pre) => pre.filter((item) => item !== seat));
        } else {
            console.log(selectedSeat.length);

            if (selectedSeat.length > 4) {
                return toast.error('You can select maximum 5 seats');
            }
            return setSelectedSeat((pre) => [...pre, seat]);
        }
    };

    return movie ? (
        <div className=" flex-center">
            <div className="custom-container flex flex-col items-start  md:flex-row gap-10 relative">
                <BlurPrimary top="20%" left="25%" />
                <BlurPrimary top="55%" right="80px" />
                <div className="rounded-lg w-60 bg-primary/10 border border-primary/70 py-10 md:sticky md:top-30">
                    <h2 className="text-lg font-semibold text-center mb-4">Available Timings</h2>
                    <div className="flex-col-center gap-1 ">
                        {dummyDateTimeData[date].map((timedata, index) => (
                            <Button
                                key={index}
                                onClick={() => handleSelectTime(timedata)}
                                small
                                secondary
                                className={classNames('bg-transparent hover:bg-primary/20', {
                                    'bg-primary hover:bg-primary/90': selectedTime == timedata,
                                })}
                            >
                                <ClockIcon />

                                {iosTimeFormat(timedata.time)}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="text-center flex-col-center flex-1  ">
                    <h1 className="text-2xl font-semibold mb-10">Select your seat</h1>
                    <img src={assets.screenImage} alt="screen" width="100%" />
                    <div className="flex flex-col items-center mt-10 text-xs">
                        <div className="grid grid-cols-2 md:grid-cols-1 mb-6 gap-4">
                            {groupRow[0].map((row, index) => (
                                <SeatList
                                    key={index}
                                    row={row}
                                    onClick={handleSelectSeat}
                                    selectedSeat={selectedSeat}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-11">
                            {groupRow.slice(1).map((group, index) => {
                                return (
                                    <div key={index}>
                                        {group.map((row, index) => (
                                            <SeatList
                                                key={index}
                                                row={row}
                                                onClick={handleSelectSeat}
                                                selectedSeat={selectedSeat}
                                            />
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Button primary medium className="mt-20" onClick={() => navigate('/mybookings')}>
                        Proceed to Checkout
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};
// phải gom từng group 1 vào thành 1 div riêng sẽ tạo ra layout như mẫu
export default Seat;
