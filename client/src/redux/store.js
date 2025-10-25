import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '@/features/movies/movieSlice';
import adminNavOpenSlice from '@/features/admin/navOpenSlice';
export const store = configureStore({
    reducer: {
        movies: movieSlice.reducer, // dữ liệu lưu là trailers lấy từ movieSlice
        adminNavOpen: adminNavOpenSlice.reducer,
    },
});
