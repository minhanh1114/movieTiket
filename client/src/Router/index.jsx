import Home from '@/pages/Home';
import Movie from '@/pages/Movie';
import MovieDetail from '@/pages/MovieDetail';
import MyBooking from '@/pages/MyBooking';
import Favorite from '@/pages/Favorite';
import NotFound from '@/pages/NotFound';

import Default from '@/layouts/Default';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movies', component: Movie },
    { path: 'movie/:id', component: MovieDetail },
    { path: 'mybooking', component: MyBooking },
    { path: 'favorite', component: Favorite, layout: Default },
    { path: '*', component: NotFound },
];
