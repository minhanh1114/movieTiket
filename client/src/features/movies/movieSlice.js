import { createSlice } from '@reduxjs/toolkit';
import { dummyShowsData } from '@/assets/assets';

export default createSlice({
    name: 'movies',
    initialState: {
        list: dummyShowsData,
        current: null,
    },
    reducers: {
        setMovieList: (state, action) => {
            state.list = action.payload;
        },
        setCurrentMovie: (state, action) => {
            state.current = action.payload;
        },
    },
});
