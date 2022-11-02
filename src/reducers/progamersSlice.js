import { createSlice } from "@reduxjs/toolkit";

const name = "ProgamersSlice";
const initialState = {
  progamers: null,
};

const progamersSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setInitProgamers: (state, action) => {
      state.progamers = action.payload;
    },
    setUpdateProgamer: (state, action) => {
      const currentIndex = state.progamers.findIndex(
        (el) => el.nickname === action.payload.nickname
      );
      state.progamers[currentIndex] = action.payload;
    },
    deleteProgamer: (state, action) => {
      const newProgamers = state.progamers.filter(
        (el) => el.id !== action.payload
      );
      state.progamers = newProgamers;
    },
  },
});

export const { setInitProgamers, setUpdateProgamer, deleteProgamer } =
  progamersSlice.actions;
export default progamersSlice;
