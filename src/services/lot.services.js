import axios from "axios";

const getLot = () => {
  const headers = { Authorization: localStorage.token };
  return axios.get("http://localhost:3001/api/lot", { headers });
};

export { getLot };