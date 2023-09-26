import { configureStore } from "@reduxjs/toolkit";
import buses from './busSlice'
import motels from './motelSlice'
import trips from './tripSlice'
import users from './userSlice'
import guests from "./guestSlice";

const store = configureStore({
    reducer: {
        buses,
        motels,
        trips,
        users,
        guests
    }
})

export default store;