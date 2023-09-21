import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: null,
};
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        adminLogin: (state, action) => {
            state.role = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { adminLogin } = userSlice.actions;
