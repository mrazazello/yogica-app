import axios, { AxiosError } from "axios";

import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { PayloadAction } from "@reduxjs/toolkit";
import { createReduxStore } from "@app/storeProvider/config/store";
import { refreshToken } from "@entities/user";

// type guard function for unknow type from redux thunk Payload action
const hasError = (obj: unknown): obj is PayloadAction<string> => {
  return typeof obj === "object" && obj !== null && "error" in obj;
};

const store = createReduxStore();

export const setupAxios = () => {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_SERVER;
  axios.defaults.headers.common.Accept = "application/json";

  axios.interceptors.request.use((request) => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user && request.headers) {
      const { token } = JSON.parse(user);
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    }
    return request;
  });

  type ISubscriber = () => void;
  let isAlreadyFetchingAccessToken = false;
  let subscribers: ISubscriber[] = [];

  const onAccessTokenFetched = () => {
    subscribers.forEach((callback) => callback());
    subscribers = [];
  };

  const addSubscriber = (callback: ISubscriber) => {
    subscribers.push(callback);
  };

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      const { config } = error;
      const originalRequest = config;
      const status = error.response?.status;

      if (originalRequest && status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;

          store.dispatch(refreshToken()).then((action) => {
            isAlreadyFetchingAccessToken = false;
            if (hasError(action)) {
              console.log("has error: ", action);
            } else {
              onAccessTokenFetched();
            }
          });
        }

        return new Promise((resolve) => {
          addSubscriber(() => resolve(axios(originalRequest)));
        });
      }
    }
  );
};
