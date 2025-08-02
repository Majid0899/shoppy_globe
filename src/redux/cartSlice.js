import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
     
    },

    removeItem: (state, action) => {
      
    },
  },
 

});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
