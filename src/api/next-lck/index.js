import customAxios from "../../lib/axios/customAxios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getDefaultRosters = async () => {
  // admin 풀리면 토큰 빼기
  const token = cookies.get("accessToken");
  const data = await customAxios.get("/api/v1/next_lck/default", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getMyRosters = async () => {
  const token = cookies.get("accessToken");
  const data = await customAxios.get("/api/v1/next_lck", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const postMyRosters = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/next_lck", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getShareRosters = async (nickname) => {
  const data = await customAxios.post("/api/v1/next_lck/share", nickname);

  return data;
};

export const getParticipants = async () => {
  return await customAxios
    .get("/api/v1/next_lck/participants-count")
    .then((response) => {
      return response;
    });
};
