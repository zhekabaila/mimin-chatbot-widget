# Mimin Chatbot Widget - React Version

Widget chatbot yang dapat dikustomisasi untuk website dengan menggunakan React, TypeScript, dan Tailwind CSS.

## Fitur

- 🎨 Kustomisasi tema yang fleksibel
- 📱 Responsive design
- 🎯 TypeScript support
- ⚡ Vite build system
- 🎨 Tailwind CSS styling
- 📞 Call window dengan kontrol mute/speaker
- 🔄 Real-time message handling
- ⚛️ React hooks dan state management

## Struktur Proyek

```
src/
├── components/          # Komponen React
│   ├── ChatWidget.tsx   # Komponen utama widget
│   ├── ChatHeader.tsx   # Header chat window
│   ├── ChatInput.tsx    # Input area
│   ├── Message.tsx      # Message components
│   └── CallWindow.tsx   # Call window component
├── config/              # Konfigurasi
│   └── environment.ts   # Environment variables
├── services/            # API services
│   └── api.ts          # API communication
├── types/               # TypeScript types
│   └── index.ts        # Interface definitions
├── utils/               # Utility functions
│   └── styleInjector.ts # Style injection
├── App.tsx              # Main App component
├── main.tsx             # Entry point
└── index.ts             # Export file
```

## Instalasi

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Penggunaan

### Basic Usage dalam React App

```tsx
import React from "react";
import { ChatWidget } from "./components/ChatWidget";
import type { ChatbotConfig } from "./types";

function App() {
  const config: ChatbotConfig = {
    theme: {
      button: {
        backgroundColor: "#ffffff",
        textColor: "#0096a2",
        iconSrc: "https://your-icon.com/icon.png",
        tooltip: "Ask Assistant",
      },
      chatWindow: {
        backgroundColor: "#0096a2",
        title: "AI Assistant",
        titleColor: "#ffffff",
        width: "350px",
        height: "600px",
        isActiveCall: true,
      },
    },
  };

  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // Implement your message handling logic here
  };

  return (
    <div className="App">
      <h1>My Website</h1>
      <ChatWidget config={config} onSendMessage={handleSendMessage} />
    </div>
  );
}
```

### Konfigurasi Tema

#### Button Configuration

- `backgroundColor`: Warna background button
- `textColor`: Warna teks button
- `iconSrc`: URL icon button
- `tooltip`: Teks tooltip button

#### Chat Window Configuration

- `backgroundColor`: Warna background header
- `title`: Judul chat window
- `titleColor`: Warna teks judul
- `titleAvatarSrc`: URL avatar di header
- `width`: Lebar chat window
- `height`: Tinggi chat window
- `isActiveCall`: Apakah fitur call aktif

#### Message Configuration

- `userMessage`: Konfigurasi pesan user
- `botMessage`: Konfigurasi pesan bot
- `textInput`: Konfigurasi input area

## API Integration

Widget ini mendukung integrasi dengan API Mimin:

```typescript
import { ApiService } from "./services/api";

// Set authentication
ApiService.setAuthCookie({ phone: "your-phone-number" });

// Fetch messages
ApiService.fetchMessages(
  "fetch",
  setLoadingMore,
  setMessages,
  setFetchDetailStatus
);
```

## State Management

Widget menggunakan React hooks untuk state management:

- `useState` untuk local state
- Props untuk configuration
- Callback functions untuk event handling

## Styling

- Tailwind CSS untuk utility classes
- Inline styles untuk dynamic styling
- FontAwesome untuk icons
- Responsive design dengan Tailwind breakpoints

## Development Notes

- Widget menggunakan React 19 dengan TypeScript
- Tailwind CSS untuk styling
- FontAwesome untuk icons
- Vite untuk build system
- Modular architecture untuk maintainability
- Hooks-based state management

## Perbedaan dengan Vanilla JS Version

1. **State Management**: Menggunakan React hooks alih-alih DOM manipulation
2. **Component Structure**: Modular React components dengan props
3. **Event Handling**: React event handlers alih-alih onclick attributes
4. **Styling**: Tailwind CSS dengan inline styles untuk dynamic values
5. **Type Safety**: Full TypeScript support dengan React types

## License

MIT License
