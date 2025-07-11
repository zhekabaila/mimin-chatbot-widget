import axios from "axios";
import { ENV } from "../config/environment";

const version = "api";

export const API = axios.create({
  baseURL: `${ENV.NEXT_PUBLIC_CHATBOT_URL}/${version}`,
  headers: {
    "Content-Type": "application/json",
  },
});
