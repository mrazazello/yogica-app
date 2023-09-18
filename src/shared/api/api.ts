import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import axios from "axios";

export const api = axios.create({
  baseURL: "API_URL", // переопределить на .env
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
  }
});
