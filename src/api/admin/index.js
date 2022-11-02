import customAxios from "../../lib/axios/customAxios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const progamerGet = async () => {
  const data = await customAxios.get("/api/v1/progamers");

  return data;
};

export const progamerUpdate = async (dto, progamerId) => {
  console.log({ dto, progamerId });
  const token = cookies.get("accessToken");
  const data = await customAxios.put(`/api/v1/progamers/${progamerId}`, dto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
