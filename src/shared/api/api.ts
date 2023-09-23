import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
  }
});
