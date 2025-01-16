import { configureStore } from "@reduxjs/toolkit";
import { tripSlice } from "./tripSlice";

const store = configureStore({
    reducer: {
        trip: tripSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;