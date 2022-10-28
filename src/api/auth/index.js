import customAxios from "../../lib/axios/customAxios";
import { Cookies } from "react-cookie";
import { persistor } from "../../App";

const cookies = new Cookies();

export const signin = async (dto) => {
  const data = await customAxios.post("/api/v1/users/login", dto);

  return data;
};

export const signup = async (dto) => {
  const data = await customAxios.post("/api/v1/users/signup", dto);

  return data;
};

export const userGet = async () => {
  const token = cookies.get("accessToken");
  const data = await customAxios.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const signout = async () => {
  cookies.remove("accessToken");
  window.location.reload();
  await persistor.purge();
};
