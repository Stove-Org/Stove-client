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