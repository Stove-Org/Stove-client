import { createSlice } from "@reduxjs/toolkit";

const name = "NewsSlice";
const initialState = {
  hotNews: null,
  publishedNews: null,
  allNews: null,
};

const newsSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setHotNews: (state, action) => {
      state.hotNews = action.payload;
    },
    setAllNews: (state, action) => {
      state.allNews = action.payload;
    },
    setUpdateAllNews: (state, action) => {
      const currentIndex = state.allNews.findIndex(
        (el) => el.id === action.payload.id
      );
      state.allNews[currentIndex] = action.payload;
    },
    deleteAllNews: (state, action) => {
      const newAllNews = state.allNews.filter((el) => el.id !== action.payload);
      state.allNews = newAllNews;
    },
    setPublishedNews: (state, action) => {
      state.publishedNews = action.payload;
    },
  },
});

export const {
  setHotNews,
  setAllNews,
  setUpdateAllNews,
  deleteAllNews,
  setPublishedNews,
} = newsSlice.actions;
export default newsSlice;
