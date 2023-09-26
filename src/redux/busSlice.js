import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBus = createAsyncThunk("bus/getBus",async (_,thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
    const res = await axios.get('http://localhost:3005/Bus');
    const data = await res.data;
    return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const addBus = createAsyncThunk("bus/addBus", async(busdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Bus',busdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneBus = createAsyncThunk("bus/getOneBus", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Bus/'+id);
        const data = await res.data;
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const updateBus = createAsyncThunk("bus/updateBus", async(id,busdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/Bus/'+id,busdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteBus = createAsyncThunk("bus/deleteBus", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
         await axios.delete('http://localhost:3005/Bus/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const busSlice = createSlice({
    name:"bus",
    initialState: { isLoading: false, buses: [], error: null },
    extraReducers: {
        [getBus.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [getBus.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.buses = action.payload;
        },
        [getBus.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [addBus.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [addBus.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.buses.push(action.payload);
        },
        [addBus.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getOneBus.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [getOneBus.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.buses = action.payload;
        },
        [getOneBus.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [updateBus.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [updateBus.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.buses[action.payload.id] = action.payload;
        },
        [updateBus.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [deleteBus.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [deleteBus.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.buses = state.buses.filter( el => el.id !== action.payload);
        },
        [deleteBus.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default busSlice.reducer;