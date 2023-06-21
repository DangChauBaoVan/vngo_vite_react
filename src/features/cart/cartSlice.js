import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    emptyCart: (state, action) => {
        state.items = []
    },

  },
});

export const {addToCart,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
