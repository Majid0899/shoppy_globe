import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        query:""
    },
    reducers:{
        setSearchText:(state,action)=>{
            state.query=action.payload;
        },
        clearSearchText:(state,action)=>{
            state.query=""
        }

    }

})
export const { setSearchText, clearSearchText } = searchSlice.actions;
export default searchSlice.reducer;