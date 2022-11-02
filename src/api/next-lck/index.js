import customAxios from "../../lib/axios/customAxios";

export const getParticipants = async () => {
  return await customAxios
    .get("/api/v1/next_lck/participants-count")
    .then((response) => {
      return response;
    });
};
