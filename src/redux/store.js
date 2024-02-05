// redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

// to create store configureStore() is used
// updated state are stored in reducer 
// reducer are situated in store, which in this project is imported from slice
export const store = configureStore({
    reducer:{
        counterReducer: countSlice
    }
})