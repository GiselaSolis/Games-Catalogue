import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/gamesReducer";

export const store = configureStore({
    reducer:{
        games : gamesReducer,
    }
})