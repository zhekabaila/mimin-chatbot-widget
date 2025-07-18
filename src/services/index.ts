import axios, { type AxiosInstance } from "axios";
import { ENV } from "../config/environment";

type typeAPIURL = 'customer' | 'chatbot' | 'openai';
export function API(type: 'axios', typeAPI: typeAPIURL): AxiosInstance;
export function API(type: 'fetch', typeAPI: typeAPIURL): (url: string, options?: RequestInit) => Promise<Response>;

export function API(
  type: 'axios' | 'fetch',
  typeAPI: typeAPIURL
) {
  const customerAPI = ENV.NEXT_PUBLIC_CUSTOMER_API;
  const chatbotAPI = ENV.NEXT_PUBLIC_CHATBOT_URL;
  const openaiAPI = ENV.NEXT_PUBLIC_OPENAI_URL;

  const version = typeAPI === 'openai' ? 'v1' : 'api';

  const baseURL =
    typeAPI === 'customer'
      ? `${customerAPI}/${version}`
      : typeAPI === 'chatbot'
        ? `${chatbotAPI}/${version}`
        : `${openaiAPI}/${version}`; // openai

  if (type === 'axios') {
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return async (
    url: string,
    options: RequestInit = {}
  ): Promise<Response> => {
    return fetch(`${baseURL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  };
}