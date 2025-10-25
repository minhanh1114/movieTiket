import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'adminNavOpen',
    initialState: {
        current: false,
    },
    reducers: {
        setNavOpen: (state, action) => {
            state.current = action.payload;
        },
    },
});
