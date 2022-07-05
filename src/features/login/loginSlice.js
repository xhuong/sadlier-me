import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    }
  }
});

const { reducer, actions } = loginSlice;
export const { setLogin } = actions;
export default reducer;
