import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";
const initialState = {
  signinState: false,
  userData: {
    email: "",
    nickname: "",
    registAt: "",
  },
};

const userSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setSigninState: (state, action) => {
      state.signinState = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    initUser: (state) => {
      state.userData.email = initialState.userData.email;
      state.userData.nickname = initialState.userData.nickname;
      state.userData.registAt = initialState.userData.registAt;
    },
    setUserNickname: (state, action) => {
      state.userData.nickname = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setSigninState, setUser, initUser, setUserNickname } =
  userSlice.actions;
export default userSlice;
