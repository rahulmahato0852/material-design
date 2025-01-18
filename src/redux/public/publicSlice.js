import { createSlice } from "@reduxjs/toolkit";

export const PublicSlice = createSlice({
    name: "publicSlice",
    initialState: { isdark: false },
    reducers: {
        SwitchMode: (state, { payload }) => {
            state.isdark = !state.isdark
        }
    }
})


export const { SwitchMode } = PublicSlice.actions
