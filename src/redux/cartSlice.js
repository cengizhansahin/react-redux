const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  carts: [],
};
const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((urun) => urun.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeCart } = cartslice.actions;
export default cartslice.reducer;
