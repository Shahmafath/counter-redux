import { createSlice } from "@reduxjs/toolkit";

// slice is the combination of action and reducer
const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count+=1
        },
        decrement: (state) => {
            state.count-=1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

// return actions from slice
export const  {increment, decrement, reset, incrementByAmount} = countSlice.actions

// return reducer from slice
export default countSlice.reducer