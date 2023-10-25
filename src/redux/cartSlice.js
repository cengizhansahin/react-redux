const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  carts: [],
  totalQuantity: 0,
};
const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += action.payload.quantity;
      } else {
        state.carts.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((urun) => urun.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalQuantity =
        state.totalQuantity -
        state.carts[itemIndex].quantity +
        action.payload.quantity;
      state.carts[itemIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartslice.actions;
export default cartslice.reducer;
