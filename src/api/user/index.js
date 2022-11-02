import customAxios from "../../lib/axios/customAxios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const userGet = async () => {
  const token = cookies.get("accessToken");
  const data = await customAxios.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const resetNickname = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/users/reset-nickname", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const resetPassword = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/users/reset-password", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const validatePasswordGet = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.post("/api/v1/users/validate-password", dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const userRemove = async (dto) => {
  const token = cookies.get("accessToken");
  const data = await customAxios.delete("/api/v1/users/withdrawl", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const adminCheck = async () => {
  const token = cookies.get("accessToken");
  const data = await customAxios.get("/api/v1/users/admin-check", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
