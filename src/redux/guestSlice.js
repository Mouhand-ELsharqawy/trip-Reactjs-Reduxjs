import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGuest = createAsyncThunk("guest/getGuest", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Guest')
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const addGuest = createAsyncThunk("guest/addGuest", async (guestdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Guest',guestdata)
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneGuest = createAsyncThunk("guest/getOneGuest", async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Guest/'+id);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


export const updateGuest = createAsyncThunk("guest/updateGuest", async(id,guestdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/Guest/'+id,guestdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteGuest = createAsyncThunk("guest/deleteGuest", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/Guest/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const guestSlice = createSlice({
    name: "guest",
    initialState: { isLoading: false, guests:[], error:null },
    extraReducers: {
        [getGuest.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getGuest.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.guests = action.payload;
        },
        [getGuest.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addGuest.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addGuest.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.guests.push(action.payload);
        },
        [addGuest.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneGuest.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneGuest.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.guests = action.payload;
        },
        [getOneGuest.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateGuest.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateGuest.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.guests[action.payload.id] = action.payload;
        },
        [updateGuest.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteGuest.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteGuest.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.guests = action.payload;
        },
        [deleteGuest.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default guestSlice.reducer;