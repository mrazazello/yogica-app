import axios from "axios";

import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";

export const setupAxios = () => {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_SERVER;
  axios.defaults.headers.common.Accept = "application/json";

  axios.interceptors.request.use(
    (request) => {
      const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (authData && request.headers) {
        request.headers.authorization = authData;
        return request;
      }
      return request;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};
