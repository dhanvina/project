import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: null,
    token: null,
    status: null,
};
const authSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setCred: (state, action) => {
            console.log(action.payload);
            state.status = true;
            state.token = action.payload.token;
        },
        logOut: (state, action) => {
            state.role = null;
            state.token = null;
            state.status = false;
        },
    },
});

export default authSlice.reducer;
export const { setCred, logOut } = authSlice.actions;
