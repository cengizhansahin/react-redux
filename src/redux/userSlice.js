const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};
const cartslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {},
    logoutSuccess: (state, action) => {},
  },
});

export const {} = cartslice.actions;
export default cartslice.reducer;
