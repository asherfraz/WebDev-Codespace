import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        // Add your reducers here
        counter: counterReducer
    },
})