import { createSlice} from "@reduxjs/toolkit";


const moviesSlice=createSlice({

     name: "movies",
     initialState:{
        nowPlayingMovies:null,
},
reducers:{
    addNowplayingMovies: (state,action)=>{
        state.nowPlayingMovies= action.payload;
    },
    addpopular: (state,action)=>{
        state.popular= action.payload;
    },
    addTrailerVideo: (state, action)=>{
        state.trailerVideo = action.payload;
    }
},
})

export const{addNowplayingMovies, addTrailerVideo, addpopular} = moviesSlice.actions;
 export default moviesSlice.reducer;