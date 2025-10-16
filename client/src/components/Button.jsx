import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
const Button = ({ children, className, secondary, small, medium, onClick }) => {
    const btnClass = twMerge(
        classNames(
            ' bg-primary hover:bg-primary-dull transition capitalize rounded-full font-medium cursor-pointer flex justify-center items-center gap-1 tracking-wide', // luôn có
            {
                'bg-gray-800 hover:bg-gray-900 rounded-lg text-sm': secondary,
                'px-4 py-2 text-xs': small,
                'px-4 py-1 sm:px-7 sm:py-2': medium,
            },
            // thêm các className tùy chỉnh khác nếu có
            className,
        ),
    );
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
