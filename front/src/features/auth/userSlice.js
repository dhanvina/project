import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: null,
    accesstoken: null,
    status: null,
    refreshtoken: null,
};
const authSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setCred: (state, action) => {
            state.status = true;
            if (action.payload?.name == "refreshedToken") {
                state.accesstoken = action.payload.response.access;
            } else {
                state.accesstoken = action.payload.token?.access;
            }
            if (action.payload?.name != "refreshedToken") {
                state.refreshtoken = action.payload.token?.refresh;
            }
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
