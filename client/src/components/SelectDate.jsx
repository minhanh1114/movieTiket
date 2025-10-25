import React, { useState, useEffect } from 'react';
import BlurPrimary from './BlurPrimary';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from './Button';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import classNames from 'classnames';

const SelectDate = ({ dateTime, id }) => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    useEffect(() => {
        setSelectedDate(null);
    }, [id]);
    const handleBookNow = () => {
        if (selectedDate) {
            navigate(`/movie/${id}/${selectedDate}`);
        } else {
            toast.error('Please select a date');
        }
    };
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div id="selectDate" className="bg-primary/10 border border-primary/20 rounded-lg p-4 relative scroll-mt-40">
            <BlurPrimary top="0" left="-80px" />
            <BlurPrimary bottom="0" right="-80px" />
            <h2 className="text-medium text-xl">Choose Date</h2>
            <div className="flex flex-col md:flex-row items-center justify-between px-5">
                <div className="flex-center  gap-4 my-4">
                    <ChevronLeft className="size-5 cursor-pointer" />
                    <div className="flex flex-wrap gap-2">
                        {Object.keys(dateTime).map((time, index) => (
                            <button
                                key={index}
                                onClick={() => handleDateSelect(time)}
                                className={classNames(
                                    'flex-col-center p-8 gap-1 h-14 w-14 cursor-pointer rounded-lg  border border-primary/80',
                                    { 'bg-primary': selectedDate === time },
                                )}
                            >
                                <span>{new Date(time).getDate()}</span>
                                <span>{new Date(time).toLocaleDateString('en-US', { month: 'short' })}</span>
                            </button>
                        ))}
                    </div>
                    <ChevronRight className="size-5 cursor-pointer" />
                </div>
                <Button medium className="rounded-md" onClick={handleBookNow}>
                    Book now
                </Button>
            </div>
        </div>
    );
};

export default SelectDate;
