import { assets } from '@/assets/assets';
import React from 'react';

const Footer = () => {
    return (
        <footer class="px-10 md:px-16 lg:px-24 xl:px-32 w-full mt-30">
            <div class="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                <div class="max-w-96">
                    <img src={assets.marvelLogo} alt="logo app" />
                    <p class="mt-6 text-sm text-gray-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <div class="flex items-center gap-2 mt-3">
                        <a href="#">
                            <img src={assets.appStore} alt="" />
                        </a>
                        <a href="#">
                            <img src={assets.googlePlay} alt="" />
                        </a>
                    </div>
                </div>

                <div class="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 class="font-semibold  mb-5">RESOURCES</h2>
                        <ul class="text-sm text-gray-300 space-y-2 list-none">
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">Tutorials</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-semibold  mb-5">COMPANY</h2>
                        <div class="text-sm text-gray-300 space-y-2 list-none">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <p class="py-4 text-center text-xs md:text-sm text-gray-300">
                Copyright {new Date().getFullYear()} © <a href="https://github.com">Truong Tuan</a>. All Right
                Reserved.
            </p>
        </footer>
    );
};

export default Footer;
