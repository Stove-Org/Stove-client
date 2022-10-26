import axios from "axios";

const VMUrl = process.env.REACT_APP_SERVER;

const get = async (endpoint, params = "") => {
  const apiUrl = `${VMUrl}${endpoint}/${params}`;
  const res = await axios.get(apiUrl);
  return res.data;
};

const post = async (endpoint, params = "", data) => {
  const apiUrl = `${VMUrl}${endpoint}/${params}`;
  const res = await axios.post(apiUrl, data);
  return res;
};

export { get, post };
