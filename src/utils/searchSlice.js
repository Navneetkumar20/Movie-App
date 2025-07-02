import { createSlice } from "@reduxjs/toolkit";

const searchSlice   = createSlice({
    name:"Search",
    initialState:{
        showSearch:false
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.showSearch= !state.showSearch;
        },
    },
});

export const { toggleSearchView}=searchSlice.actions;

export default searchSlice.reducer;