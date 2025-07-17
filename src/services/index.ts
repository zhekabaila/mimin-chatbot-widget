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


export const getIntructions = async (username: string, apiKey: string): Promise<string> => {
  const promptTypes = ['voice-greeting', 'voice-behavior', 'voice-information', 'voice-end'];

  const fetchPromises = promptTypes.map(async (type) => {
    try {
      const query = `limit=1&page=1&order=_id&sort=1&category=chatbot&value=${type}`;
      const response = await API('fetch', 'customer')(
        `/v1/chatbotprompt/get-chatbot-prompt-by-username/${username}?${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
          }
        }
      );

      const data = await response.json();

      if (response.ok && data?.data?.length > 0 && data.data[0].prompt) {
        return data.data[0].prompt;
      }

      return null;
    } catch (error) {
      console.error(`[getIntructions] error for type: ${type}`, error);
      return null;
    }
  });

  const allInstructions = await Promise.all(fetchPromises);

  const validInstructions = allInstructions.filter((instruction): instruction is string => Boolean(instruction));

  if (validInstructions.length > 0) {
    return validInstructions.join('\n\n');
  }

  throw new Error('Failed to fetch any instructions from endpoints');
};