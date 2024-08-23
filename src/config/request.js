import axios from "axios";

const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer lfdlgdmgdgd3wrwgre";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
