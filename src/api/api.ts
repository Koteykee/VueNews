import axios from "axios";

import { NEWS_API, NEWS_API_KEY } from "@/config/config";

export const Api = axios.create({ baseURL: `${NEWS_API}` });

Api.interceptors.request.use(
  (config) => {
    config.headers["X-ACCESS-KEY"] = NEWS_API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
