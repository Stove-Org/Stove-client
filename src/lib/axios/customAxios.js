import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const customAxios = axios.create({
  baseURL: "",
  headers: cookies.get("access_token") !== undefined && {
    Authorization: `Bearer ${cookies.get("access_token")}`,
  },
});

export default customAxios;
