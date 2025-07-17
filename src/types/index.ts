export interface ChatWindowConfig {
  isActiveCall?: boolean;
  needAuthentication?: boolean;
  width?: string;
  height?: string;
  header?: {
    backgroundColor?: string;
    color?: string;
    title?: string;
    description?: string;
    avatarSrc?: string;
  };
  body?: {
    backgroundColor?: string;
  };
  icon?: {
    phoneColor?: string;
    refreshColor?: string;
    closeColor?: string;
  };
  userMessage?: {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    iconUrl?: string;
  };
  botMessage?: {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    iconUrl?: string;
  };
  textInput?: {
    backgroundColor?: string;
    borderColor?: string;
    placeholder?: string;
    sendButtonColor?: string;
  };
}

export interface ButtonConfig {
  backgroundColor?: string;
  textColor?: string;
  iconSrc?: string;
  tooltip?: string;
}

export interface ThemeConfig {
  button: ButtonConfig;
  chatWindow: ChatWindowConfig;
}

export interface Credentials {
  apiKey?: string;
  username?: string;
}

export interface ChatbotConfig {
  credentials?: Credentials;
  theme?: ThemeConfig;
}

export interface PaginationData {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface AuthCookie {
  phone: string;
}

export interface Environment {
  NEXT_PUBLIC_CUSTOMER_API: string;
  NEXT_PUBLIC_CHATBOT_URL: string;
  NEXT_PUBLIC_OPENAI_URL: string;
  NEXT_PUBLIC_OPENAI_KEY: string;
}

export interface IEventStreamResponse {
  event: "start" | "token" | "end";
  data: string;
}

export interface IESPayloadResponse {
  event: "payload";
  chat_history_id: string;
  media: string;
  media_type: string;
  message: string;
  title: string;
  type: string;
}

export interface IESMetaDataResponse {
  event: "metadata";
  data: {
    chatId: string;
    chatMessageId: string;
    memoryType: string;
    question: string;
    sessionId: string;
  };
}

export type IESResponse =
  | IEventStreamResponse
  | IESPayloadResponse
  | IESMetaDataResponse;

export interface Interaction {
  human?: Message;
  ai?: Message;
  date: string | Date;
  id: string;
}

export interface Message {
  content: string;
  additional_kwargs: Record<string, unknown>;
  example: boolean;
}

export interface Pagination {
  total: 2;
  total_pages: 1;
  page: 1;
  size: 100;
}

export type LoginTypeAction =
  | "default-password"
  | "forgot-password"
  | "activate-user";

export type Conversation = {
  _id: string;
  phone: string;
  type: string;
  session_active: boolean;
  chatbot_active: boolean;
  thread_id: string;
  timer_start_at: string;
  total_timer: number;
  created_at: string;
  updated_at: string;
  title?: string;
};

export type ConversationsResponse = {
  data: Conversation[];
  size: number;
  pages: number;
  page: number;
  limit: number;
};
