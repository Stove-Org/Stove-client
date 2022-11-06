import customAxios from "../../lib/axios/customAxios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const progamerGet = async () => {
  const data = await customAxios.get("/api/v1/progamers");

  return data;
};

export const progamerUpdate = async (dto, progamerId) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.put(`/api/v1/progamers/${progamerId}`, dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const progamerDelete = async (progamerId) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.delete(`/api/v1/progamers/${progamerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const progamerPost = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/progamers", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const rostersGet = async () => {
  const data = await customAxios.get("/api/v1/next_lck/default");

  return data;
};

export const newsAllGet = async (offset, limit) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.get(
    `/api/v1/news/all?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const newsUpdate = async (newsId, dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.put(`/api/v1/news/${newsId}`, dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const newsDelete = async (newsId) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.delete(`/api/v1/news/${newsId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const naverNewsRefreshGet = async () => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/news/sync-naver-news", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const defaultRosterPost = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/next_lck/default", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
