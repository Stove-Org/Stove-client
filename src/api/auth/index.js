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

export const signout = async () => {
  cookies.remove("accessToken");
  await persistor.purge();
  window.location.reload();
};

export const validateEmailGet = async (email) => {
  const data = await customAxios.get(`/api/v1/users/validate-email/${email}`);

  return data;
};

export const validateNicknameGet = async (nickname) => {
  const data = await customAxios.get(
    `/api/v1/users/validate-nickname/${nickname}`
  );

  return data;
};
