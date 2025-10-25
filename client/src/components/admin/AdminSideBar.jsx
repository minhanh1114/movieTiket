import React from 'react';
import { useSelector } from 'react-redux';
import { assets } from '@/assets/assets';
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react';
import { NavLink } from 'react-router';
import classNames from 'classnames';

const AdminSideBar = () => {
    const isOpenNav = useSelector((state) => state.adminNavOpen.current);

    const user = {
        firstName: 'Admin',
        lastName: 'User',
        imageUrl: assets.profile,
    };
    const navLink = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
        { name: 'Add Show', path: '/admin/addshow', icon: PlusSquareIcon },
        { name: 'List Show', path: '/admin/listshow', icon: ListIcon },
        { name: 'List booking', path: '/admin/listbooking', icon: ListCollapseIcon },
    ];
    return (
        <div
            className={classNames(
                'h-screen max-md:bg-black/70 backdrop-blur max-md:w-0 transition-all duration-300 flex flex-col gap-5 items-center border-r border-primary/20 pt-10 max-md:absolute z-100 max-md:top-0 max-md:bottom-0 max-md:left-0 overflow-hidden',
                { 'max-md:w-full': isOpenNav },
            )}
        >
            <div>
                <img src={user.imageUrl} alt="" className="h-9 w-9 md:h-14 md:w-14 rounded-full" />
                <p className="mt-5 max-md:hidden">
                    {user.firstName} {user.lastName}
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                {navLink.map((nav, index) => {
                    const Icon = nav.icon;
                    return (
                        <NavLink
                            end
                            key={index}
                            to={nav.path}
                            className={({ isActive }) =>
                                `flex gap-2 py-2 px-5  ${isActive ? 'bg-primary/20 border-r-5 border-primary text-primary' : ''} `
                            }
                        >
                            <Icon /> {nav.name}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminSideBar;
