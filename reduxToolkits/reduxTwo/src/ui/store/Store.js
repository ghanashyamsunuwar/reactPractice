import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "../features/counter/CounterSlice";


export const store = configureStore({
    reducer: {
        counter : CounterSlice,
    },
})