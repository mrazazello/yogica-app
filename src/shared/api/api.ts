import {
  Action,
  AnyAction,
  PayloadAction,
  ThunkMiddleware
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import axios, { AxiosError } from "axios";

import { IStateSchema } from "@app/storeProvider";
import { refreshToken } from "@entities/user";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";

// type guard function for unknow type from redux thunk Payload action
const hasError = (obj: unknown): obj is PayloadAction<string> => {
  return typeof obj === "object" && obj !== null && "error" in obj;
};

const baseURL = import.meta.env.VITE_BACKEND_SERVER;

export const axiosWithCredentials = axios.create({
  baseURL: baseURL,
  headers: { "Content-type": "application/json" },
  withCredentials: true
});

export const unInterceptedAxios = axios.create({
  baseURL: baseURL,
  headers: { "Content-type": "application/json" }
});

export const setupAxios = (
  store: ToolkitStore<
    IStateSchema,
    Action<any>,
    [ThunkMiddleware<IStateSchema, AnyAction>]
  >
) => {
  axios.defaults.baseURL = baseURL;
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
