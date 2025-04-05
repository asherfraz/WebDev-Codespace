import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            // Check if value is greater than 0 before decrementing
            (state.value > 0) ? state.value -= 1 : state.value = 0
        },
        reset: state => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

// export these actions
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
// export reducer
export default counterSlice.reducer