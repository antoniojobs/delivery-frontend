import axios from "axios";

const api = axios.create({
  baseURL: "https://rotadelivery.herokuapp.com/"
});
export default api;
