import React from 'react';
import { assets } from '@/assets/assets';
import { MenuIcon, XIcon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import navOpenSlice from '@/features/admin/navOpenSlice';
import { twMerge } from 'tailwind-merge';

const AdminNavbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.adminNavOpen.current);
    console.log(isOpen);

    return (
        <div className="flex justify-between md:justify-start items-center admin-container h-18 border-b border-primary/20">
            <img src={assets.logo} alt="" className="h-[27px] pl-10" />
            <div
                onClick={() => dispatch(navOpenSlice.actions.setNavOpen(!isOpen))}
                className="cursor-pointer p-1 relative"
            >
                <XIcon
                    className={twMerge(
                        'absolute top-0 left-0 size-5 transition-all duration-300 rotate-0 max-md:opacity-0 md:opacity-0',
                        isOpen ? 'max-md:opacity-100 rotate-90' : '',
                    )}
                />
                <MenuIcon
                    className={twMerge(
                        'absolute top-0 left-0 size-5 transition-all duration-300 rotate-0 max-md:opacity-100 md:opacity-0',
                        isOpen ? 'max-md:opacity-0 rotate-90' : '',
                    )}
                />
            </div>
        </div>
    );
};

export default AdminNavbar;
