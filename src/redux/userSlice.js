const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
