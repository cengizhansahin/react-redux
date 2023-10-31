const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.users = action.payload;
    },
    logoutSuccess: (state) => {
      state.users = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
