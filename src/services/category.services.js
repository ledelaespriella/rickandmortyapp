import axios from "axios";

const getCategory = () => {
  const headers = { Authorization: localStorage.token };
  return axios.get("http://localhost:3001/api/category", { headers });
};

export { getCategory };