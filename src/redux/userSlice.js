const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
