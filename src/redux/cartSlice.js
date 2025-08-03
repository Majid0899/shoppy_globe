import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
    
      if (newItem.stock > 0) {
        if (existingItem) {
          if (existingItem.quantity < newItem.stock) {
            existingItem.quantity += 1;
          }
        } else {
          state.items.push({ ...newItem, quantity: 1 });
        }
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
    },
    clearItem:(state,action)=>{
      state.items.length=0
      console.log(state.items)
    },
  },
 

});

export const { addItem, removeItem,clearItem } = cartSlice.actions;
export default cartSlice.reducer;
