import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router'; // Added useNavigate chuyển hướng programmatically
import { assets } from '@/assets/assets.js';
import { MenuIcon, SearchIcon, TicketIcon, XIcon } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const { user } = useUser();
    const { openSignIn } = useClerk();
    const navigate = useNavigate(); // Khởi tạo useNavigate
    return (
        <div className="flex justify-between items-center px-6 py-5 fixed top-0 left-0 right-0 w-full z-50 md:px-16 lg:px-36">
            <Link to="/">
                <img src={assets.logo} alt="" />
            </Link>
            <div
                className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}
            >
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/">Theaters</Link>
                <Link to="/">Releases</Link>
                <XIcon
                    onClick={toggleMenu}
                    className="md:hidden w-8 h-8 max-md:absolute max-md:top-5 max-md:right-5 cursor-pointer space-10"
                />
            </div>
            <div className="flex gap-6 justify-center items-center">
                <SearchIcon className="hidden md:block" />
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                onClick={() => {
                                    navigate('/mybookings');
                                }}
                                label="My Bookings"
                                labelIcon={<TicketIcon size={15} />}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <Button onClick={openSignIn} medium>
                        Login
                    </Button>
                )}

                <MenuIcon onClick={toggleMenu} className="md:hidden  w-8 h-8 cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;
