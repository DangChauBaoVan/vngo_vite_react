import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.location_id === action.payload
      );

      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it not in cart!`
        );
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
