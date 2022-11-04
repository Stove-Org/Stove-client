import customAxios from "../../lib/axios/customAxios";

export const getHotNews = async () => {
  const data = await customAxios.get("/api/v1/news/hot");

  return data;
};

export const getPublishedNews = async (offset, limit) => {
  const data = await customAxios.get(
    `/api/v1/news/published?offset=${offset}&limit=${limit}`
  );

  return data;
};
