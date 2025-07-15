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
    credentials: {
      apiKey: "your-api-key",
      username: "your-username",
    },
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
        titleAvatarSrc: "https://your-avatar.com/avatar.jpg",
        width: "350px",
        height: "600px",
        isActiveCall: true,
        icon: {
          phoneColor: "#ffffff",
          refreshColor: "#ffffff",
          closeColor: "#ffffff",
        },
        userMessage: {
          backgroundColor: "#0096a2",
          borderColor: "#0096a2",
          textColor: "#ffffff",
        },
        botMessage: {
          backgroundColor: "#ffffff",
          borderColor: "#0096a2",
          textColor: "#0096a2",
        },
        textInput: {
          backgroundColor: "#0096a2",
          borderColor: "#ffffff",
          placeholder: "Ketik pertanyaan Anda...",
          sendButtonColor: "#0096a2",
        },
      },
    },
  };

  return (
    <div className="App">
      <h1>My Website</h1>
      <ChatWidget config={config} signature="your-signature" />
    </div>
  );
}
```

### CDN Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mimin Chatbot Widget Demo</title>
  </head>
  <body>
    <div>
      <h1>Mimin Chatbot Widget Demo</h1>
      <p>Widget akan muncul di pojok kanan bawah</p>
    </div>

    <!-- Hanya 1 file CDN - self-contained, tidak perlu React/ReactDOM -->
    <script src="https://cdn.jsdelivr.net/gh/zhekabaila/mimin-chatbot-widget@master/dist/chat-widget.umd.js"></script>

    <script>
      ChatWidget.Chatbot.init({
        credentials: {
          apiKey: "your-api-key-here",
          username: "your-username-here",
        },
        theme: {
          button: {
            backgroundColor: "#ffffff",
            textColor: "#0096a2",
            iconSrc: "https://appstaging.mimin.io/favicon.ico",
            tooltip: "Ask Mimin",
          },
          chatWindow: {
            backgroundColor: "#0096a2",
            title: "Mimin AI",
            titleColor: "#ffffff",
            titleAvatarSrc:
              "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg",
            width: "330px",
            height: "600px",
            isActiveCall: true,
            icon: {
              phoneColor: "#ffffff",
              refreshColor: "#ffffff",
              closeColor: "#ffffff",
            },
            userMessage: {
              backgroundColor: "#0096a2",
              borderColor: "#0096a2",
              textColor: "#ffffff",
            },
            botMessage: {
              backgroundColor: "#ffffff",
              borderColor: "#0096a2",
              textColor: "#0096a2",
            },
            textInput: {
              backgroundColor: "#0096a2",
              borderColor: "#ffffff",
              placeholder: "Ketik pertanyaan Anda...",
              sendButtonColor: "#0096a2",
            },
          },
        },
      });
    </script>
  </body>
</html>
```

### ES Module Usage (Self-Contained)

```html
<script type="module">
  import { Chatbot } from "https://cdn.jsdelivr.net/gh/zhekabaila/mimin-chatbot-widget@master/dist/chat-widget.es.js";

  Chatbot.init({
    credentials: {
      apiKey: "your-api-key-here",
      username: "your-username-here",
    },
    // ... theme config
  });
</script>
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

## Styling Unik dengan Prefix Tailwind CSS

> **Catatan:** Fitur prefix Tailwind CSS (misal: `mimin-`) <b>belum digunakan pada versi ini</b>. Semua class Tailwind pada widget ini masih menggunakan class default tanpa prefix. Fitur prefix akan tersedia pada versi berikutnya untuk menghindari bentrok style dengan website client.

### Rencana Penggunaan Prefix (Next Version)

- Nantinya, semua class Tailwind akan diawali prefix (misal: <code>mimin-bg-[#0096A2]</code>, <code>mimin-rounded-md</code>, dst).
- Akan ada instruksi build dan contoh penggunaannya setelah fitur ini dirilis.

### Cara Setting Prefix

1. Tambahkan di `tailwind.config.js`:
   ```js
   module.exports = {
     prefix: "mimin-",
     // ...config lain
   };
   ```
2. Ubah semua className di kode menjadi diawali `mimin-`, contoh:
   ```jsx
   <div className="mimin-bg-[#0096A2] mimin-rounded-md mimin-text-white">
     ...
   </div>
   ```
3. Build ulang CSS, lalu inject hasil build ke widget.

> **Catatan:** Jika menggunakan CDN Tailwind standar, fitur prefix tidak tersedia. Solusi: build CSS sendiri lalu host di CDN kamu.

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
