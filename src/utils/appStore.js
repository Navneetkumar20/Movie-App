 import {configureStore } from "@reduxjs/toolkit"
 import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import configReducers from "./configSlice"
 const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
            search: searchReducer,
            config: configReducers,

        },
    }
 )
 export default appStore;