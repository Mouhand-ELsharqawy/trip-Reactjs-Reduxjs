import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/User')
        const data = await res.data
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


export const addUser = createAsyncThunk("user/addUser", async(userdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/User',userdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneUser = createAsyncThunk("user/getOneUser", async(id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('http://localhost:3005/User/'+id);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


export const updateUser = createAsyncThunk("user/updateUser", async(id,userdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
     const res = await axios.patch('http://localhost:3005/User/'+id,userdata);
     const data = await res.data;
     return data;   
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteUser = createAsyncThunk("user/deleteUser", async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/User/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


const userSlice = createSlice({
    name: "user",
    initialState: { isLoading: false, users:[], error:null },
    extraReducers: {
        [getUser.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUser.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [addUser.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addUser.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.users.push(action.payload);
        },
        [addUser.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getOneUser.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneUser.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [getOneUser.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [updateUser.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateUser.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.users[action.payload.id] = action.payload;
        },
        [updateUser.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [deleteUser.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteUser.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.users = state.users.filter( el => el.id !== action.payload);
        },
        [deleteUser.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;