import { configureStore } from  '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
export const Store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})