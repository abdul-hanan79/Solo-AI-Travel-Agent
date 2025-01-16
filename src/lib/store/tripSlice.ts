import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getDestination = createAsyncThunk("trip/getDestination", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://freetestapi.com/api/v1/countries')
        const data = res.data;
        if (!data) {
            return rejectWithValue(data)
        }
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})

interface initialStateType {
    data: null | object | undefined
}

const initialState: initialStateType = {
    data: null,
}

export const tripSlice = createSlice({
    name: "TripSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDestination.pending, (state) => {
                return state;
            })
            .addCase(getDestination.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getDestination.rejected, (state) => {
                return state;
            })
    }
})

export const { } = tripSlice.actions

export default tripSlice.reducer
