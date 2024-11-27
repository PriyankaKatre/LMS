import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAutheticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.isAutheticated = true;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isAutheticated = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
