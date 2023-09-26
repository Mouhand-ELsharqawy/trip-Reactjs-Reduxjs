import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getTrip = createAsyncThunk("trip/getTrip", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Trip')
        const data = await res.data
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const addTrip = createAsyncThunk("trip/addTrip", async(tripdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Trip',tripdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const getOneTrip = createAsyncThunk("trip/getOneTrip", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Trip/'+id)
        const data = await res.data
        return data
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const updateTrip = createAsyncThunk("trip/updateTrip", async(id,tripdata,thunkAPI) => {
     const { rejectWithValue } = thunkAPI;
     try{
        const res = await axios.patch('http://localhost:3005/Trip/'+id,tripdata)
        const data = await res.data
        return data
     }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteTrip = createAsyncThunk("trip/deleteTrip", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/Trip/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})
const tripSlice = createSlice({
    name: "trip",
    initialState: { isLoading: false, trips: [], error: null },
    extraReducers: {
        [getTrip.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getTrip.fulfilled]:  (state,action) => {
            state.isLoading = false;
            state.trips = action.payload;
        },
        [getTrip.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTrip.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addTrip.fulfilled]:  (state,action) => {
            state.isLoading = false;
            state.trips.push(action.payload);
        },
        [addTrip.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneTrip.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneTrip.fulfilled]:  (state,action) => {
            state.isLoading = false;
            state.trips = action.payload;
        },
        [getOneTrip.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateTrip.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateTrip.fulfilled]:  (state,action) => {
            state.isLoading = false;
            state.trips[action.payload.id] = action.payload;
        },
        [updateTrip.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteTrip.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteTrip.fulfilled]:  (state,action) => {
            state.isLoading = false;
            state.trips = state.trips.filter(el => el.id !== action.payload);
        },
        [deleteTrip.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default tripSlice.reducer;