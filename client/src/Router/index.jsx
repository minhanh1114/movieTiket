import Home from '@/pages/Home';
import Movie from '@/pages/Movie';
import MovieDetail from '@/pages/MovieDetail';
import MyBooking from '@/pages/MyBooking';
import Seat from '@/pages/Seat';
import Favorite from '@/pages/Favorite';
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/admin/Dashboard';
import ListBooking from '@/pages/admin/ListBooking';
import ListShow from '@/pages/admin/ListShow';
import Default from '@/layouts/Default';
import AddShow from '@/pages/admin/AddShow';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movies', component: Movie },
    { path: 'movie/:id', component: MovieDetail },
    { path: 'movie/:id/:date', component: Seat },
    { path: 'mybookings', component: MyBooking },
    { path: 'favorite', component: Favorite, layout: Default },
    { path: '*', component: NotFound },
];
export const privateRoutes = [
    { path: '', component: Dashboard },
    { path: 'addshow', component: AddShow },
    { path: 'listshow', component: ListShow },
    { path: 'listbooking', component: ListBooking },
];
