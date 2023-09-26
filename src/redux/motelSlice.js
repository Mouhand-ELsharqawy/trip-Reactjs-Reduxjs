import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMotel = createAsyncThunk("motels/getMotel", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Motel');
        const data = await res.data
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const addMotel = createAsyncThunk("motels/addMotel", async(moteldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/Motel',moteldata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneMotel = createAsyncThunk("motel/getOneMotel", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/Motel/'+id);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


export const updateMotel = createAsyncThunk("motel/updateMotel", async(id,moteldata, thunkAPI) =>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/Motel/'+id,moteldata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteMotel = createAsyncThunk("motel/deleteMotel", async(id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
         await axios.delete('http://localhost:3005/Motel/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


const motelSlice = createSlice({
    name: "motels",
    initialState: { isLoading: false, motels: [], error: null },
    extraReducers: {
        [getMotel.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getMotel.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.motels = action.payload;
        },
        [getMotel.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [addMotel.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addMotel.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.motels.push(action.payload);
        },
        [addMotel.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getOneMotel.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneMotel.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.motels = action.payload;
        },
        [getOneMotel.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [updateMotel.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateMotel.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.motels[action.payload.id] = action.payload;
        },
        [updateMotel.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [deleteMotel.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteMotel.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.motels = state.motels.filter( el => el.id !== action.payload);
        },
        [deleteMotel.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default motelSlice.reducer;