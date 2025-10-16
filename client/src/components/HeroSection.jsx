import React from 'react';
import { assets } from '@/assets/assets.js';
import { ArrowRightIcon, Calendar1Icon, ClockIcon } from 'lucide-react';
import Button from './Button';

const HeroSection = () => {
    return (
        <div className='h-screen px-6 md:px-16 lg:px-36 bg-[url("assets/backgroundImage.png")] bg-cover bg-center flex flex-col items-start justify-center gap-6'>
            <img src={assets.marvelLogo} alt="marvel-Logo" className="max-h-11 lg:h-11" />
            <h1 className="tracking-wide text-5xl md:text-7xl font-bold text-center">
                Guardians <br /> of the Galax
            </h1>
            <div className="flex flex-row gap-4">
                <p>Action | Adventure | Sci-Fi</p>
                <p className="flex-center gap-1 ">
                    <Calendar1Icon />
                    <span>2018</span>
                </p>
                <p className="flex-center gap-1">
                    <ClockIcon />
                    <span>2h 8m</span>
                </p>
            </div>
            <p className="max-w-md text-gray-300">
                In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people
                meet in London and try to stop a conspiracy.
            </p>
            <Button medium className="gap-1">
                <span>Explore Movies</span>
                <ArrowRightIcon className="size-5" />
            </Button>
        </div>
    );
};

export default HeroSection;
