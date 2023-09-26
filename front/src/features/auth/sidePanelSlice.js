import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,
};

const sidePanelSlice = createSlice({
    name: "sidePanel",
    initialState,
    reducers: {
        openPanel: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { openPanel } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
