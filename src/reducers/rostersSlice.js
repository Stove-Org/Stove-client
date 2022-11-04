import { createSlice } from "@reduxjs/toolkit";

const name = "RostersSlice";
const initialState = {
  participants: 0,
  defaultRosters: [],
  myRosters: [],
};

const rostersSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setDefaultRosters: (state, action) => {
      // 초기 데이터를 넣어두는 로스터
      state.defaultRosters = action.payload;
    },
    setAddDefaultRosters: (state, action) => {
      state.defaultRosters = action.payload;
    },
    setMyRosters: (state, action) => {
      state.myRosters = action.payload;
    },
    setResetRosters: (state) => {
      // 초기화 버튼
      state.myRosters = initialState.defaultRosters;
    },
  },
});

export const {
  setDefaultRosters,
  setAddDefaultRosters,
  setMyRosters,
  setResetRosters,
} = rostersSlice.actions;
export default rostersSlice;
