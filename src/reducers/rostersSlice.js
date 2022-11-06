import { createSlice } from "@reduxjs/toolkit";

const name = "RostersSlice";
const initialState = {
  initRosters: null,
  myRosters: null,
};

const rostersSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setInitRosters: (state, action) => {
      state.initRosters = action.payload;
    },
    setMyRosters: (state, action) => {
      state.myRosters = action.payload;
    },
  },
});

export const { setInitRosters, setMyRosters } = rostersSlice.actions;
export default rostersSlice;
