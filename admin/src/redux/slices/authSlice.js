import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    loginUserAction: (state, action) => {
      state.user = action.payload
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutUserAction: (state) => {
      state.user = null;
      localStorage.removeItem("user")
    }
  }
})

export const { loginUserAction, logoutUserAction } = authSlice.actions

export default authSlice.reducer