import axios from "axios";
import queryString from "query-string";

const API_URL = "https://lite.lightwallet.net";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.Authorization = 'Bearer '+ accessToken ;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      if (response.data.data) {
        return response.data.data;
      }
      return response.data;
    }
    return response;
  },
  (error) => {
    console.error(error, "Call Api Error");
  }
);

export default axiosClient;
