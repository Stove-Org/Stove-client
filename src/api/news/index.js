import customAxios from "../../lib/axios/customAxios";

export const getHotNews = async () => {
  const data = await customAxios.get("/api/v1/news/hot");
  console.log(123);
  return data;
};

// export const getPublishedNews = async () => {
//   return await customAxios
//     .get("/api/v1/next_lck/participants-count")
//     .then((response) => {
//       return response;
//     });
// };
