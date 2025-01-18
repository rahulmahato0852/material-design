import { configureStore } from "@reduxjs/toolkit";
import { PublicSlice } from "./public/publicSlice";

const reduxStore = configureStore({
    reducer: {
        public: PublicSlice.reducer
    }
})

export default reduxStore
