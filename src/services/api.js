import axios from "axios";

const api = axios.create({
  baseURL: precess.env.REACT_APP_API_URL
});
export default api;
