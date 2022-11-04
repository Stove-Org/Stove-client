import { createSlice } from "@reduxjs/toolkit";

const name = "NewsSlice";
const initialState = {
  hotNews: null,
  publishedNews: null,
};

const newsSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setHotNews: (state, action) => {
      state.hotNews = action.payload;
    },
  },
});

export const { setHotNews } = newsSlice.actions;
export default newsSlice;
