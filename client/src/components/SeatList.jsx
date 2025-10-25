import React from 'react';
import Button from './Button';
import classNames from 'classnames';

const SeatList = ({ row, count = 9, selectedSeat, onClick }) => {
    return (
        <div className="flex gap-2 mt-2">
            <div className="flex-center flex-wrap gap-2">
                {Array.from({ length: count }).map((_, index) => {
                    const seatId = `${row}${index + 1}`;
                    return (
                        <Button
                            key={seatId}
                            onClick={() => onClick(seatId)}
                            small
                            secondary
                            className={classNames('border border-primary/80 w-8 h-8', {
                                'bg-primary hover:bg-primary': selectedSeat.includes(seatId),
                            })}
                        >
                            {seatId}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default SeatList;
