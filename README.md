# Mimin Chatbot Widget - React Version

Widget chatbot yang dapat dikustomisasi untuk website dengan menggunakan React, TypeScript, dan Tailwind CSS.

## Fitur

- **Chat AI** — Streaming real-time conversation dengan AI agent
- **Voice Call** — Integrasi voice agent (OpenAI / ElevenLabs) untuk panggilan suara
- **Autentikasi** — Login & register customer dengan token-based auth
- **Greeting Screen** — Tampilan sambutan sebelum mulai chat
- **Dynamic Registration Fields** — Form register dinamis berdasarkan konfigurasi backend (Zod + react-hook-form)
- **Media Upload** — Kirim gambar/file dalam percakapan
- **Socket.io** — Real-time push message (endSession, reminderFired, websiteMessage)
- **Abort Controller** — Pembatalan request yang sedang berjalan
- **Session Persistence** — Token & greeting state tersimpan di localStorage
- **Tailwind CSS dengan Prefix `mimin-`** — Tidak bentrok dengan style website client
- **Framer Motion** — Animasi buka/tutup widget
- **TypeScript** — Full type safety

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

### Props ChatWidget

| Prop | Tipe | Wajib | Deskripsi |
|------|------|-------|-----------|
| `config` | `ChatbotConfig` | Tidak | Konfigurasi tema, credentials, dan tipe widget |
| `signature` | `string` | Ya | Signature untuk autentikasi ke chatbot API |
| `voiceAgent` | `'elevenlabs' \| 'openai'` | Ya | Provider voice agent yang digunakan |

### Credentials

| Field | Tipe | Wajib | Deskripsi |
|-------|------|-------|-----------|
| `apiKey` | `string` | Tidak | API key untuk akses Mimin backend |
| `username` | `string` | Tidak | Username/identifier chatbot |
| `websiteId` | `string` | Tidak | ID website (untuk widgetType `website`) |
| `apiUrl` | `string` | Tidak | Custom API base URL |

### Theme → Button

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna background button trigger |
| `textColor` | `string` | Warna teks button trigger |
| `iconSrc` | `string` | URL icon pada button trigger |
| `tooltip` | `string` | Tooltip text saat hover button |

### Theme → chatWindow

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `isActiveCall` | `boolean` | Aktifkan fitur voice call |
| `enableLogin` | `boolean` | Tampilkan flow login sebelum chat |
| `enableRegister` | `boolean` | Tampilkan tombol register di auth screen |
| `enableGreating` | `boolean` | Tampilkan greeting screen sebelum chat |
| `enableMediaUpload` | `boolean` | Aktifkan upload media di chat input |
| `width` | `string` | Lebar chat window, misal `"330px"` |
| `height` | `string` | Tinggi chat window, misal `"600px"` |

### chatWindow → header

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna background header |
| `color` | `string` | Warna icon di header |
| `title` | `string` | Judul chatbot di header |
| `description` | `string` | Deskripsi di bawah judul |
| `avatarSrc` | `string` | URL avatar/logo di header & auth screen |
| `closeColorButton` | `string` | Warna tombol close |
| `voiceAIColorButton` | `string` | Warna tombol voice AI |
| `refreshColorButton` | `string` | Warna tombol refresh |

### chatWindow → body

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna background area chat |

### chatWindow → userMessage

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna bubble pesan user |
| `borderColor` | `string` | Warna border bubble user |
| `textColor` | `string` | Warna teks pesan user |
| `iconUrl` | `string` | URL avatar di samping pesan user |

### chatWindow → botMessage

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna bubble pesan bot |
| `borderColor` | `string` | Warna border bubble bot |
| `textColor` | `string` | Warna teks pesan bot |
| `iconUrl` | `string` | URL avatar di samping pesan bot |

### chatWindow → textInput

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `backgroundColor` | `string` | Warna background input area |
| `borderColor` | `string` | Warna border input area |
| `placeholder` | `string` | Placeholder text di input |
| `sendButtonColor` | `string` | Warna tombol kirim |
| `footerText` | `string` | Teks footer di bawah input |
| `footerTextColor` | `string` | Warna teks footer |

### chatWindow → greating

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `title` | `string` | Judul di greeting screen |
| `description` | `string` | Deskripsi di greeting screen |
| `avatar` | `string` | URL avatar besar di greeting screen |
| `color` | `string` | Warna utama greeting screen (background, tombol, teks) |

### widgetType

| Nilai | Deskripsi |
|-------|-----------|
| `"website"` | Mode website — menggunakan webhook endpoint, socket room berbasis `websiteId-phone` |
| `"chatbot"` | Mode chatbot — menggunakan chatbot endpoint, socket room berbasis `chat_history_id` |

## Alur Widget

```
Widget dibuka
  ├── enableGreating = true → Greeting Screen → klik "Start Chat" → localStorage greeting token
  ├── enableLogin = true → Auth Window
  │     ├── Landing → Sign In / Create Account
  │     ├── Sign In → Login (phone ± password) → simpan token → chat
  │     └── Create Account → Dynamic form (required/optional tabs) → password + confirm → register → balik ke Sign In
  └── Authenticated / tidak perlu login → Chat Window
        ├── Header (title, avatar, call button, close)
        ├── Chat Content (messages, streaming response)
        ├── Chat Input (text, media upload, send, cancel)
        └── Voice Call (OpenAI / ElevenLabs)
```

## CDN Usage

```html
<script src="https://cdn.jsdelivr.net/gh/zhekabaila/mimin-chatbot-widget@master/dist/chat-widget.umd.js"></script>
<script>
  ChatWidget.Chatbot.init({
    credentials: {
      apiKey: "your-api-key",
      username: "your-username",
    },
    theme: {
      button: {
        backgroundColor: "#ffffff",
        textColor: "#0096a2",
        iconSrc: "/icons/favicon.ico",
        tooltip: "Ask Mimin",
      },
      chatWindow: {
        enableGreating: true,
        enableLogin: true,
        enableRegister: true,
        isActiveCall: true,
        width: "330px",
        height: "600px",
        header: {
          title: "Mimin AI",
          avatarSrc: "/icons/agent.jpg",
        },
        greating: {
          title: "Hai, Aku Mimin!",
          description: "Butuh bantuan? Chat sekarang!",
          color: "#0096A2",
        },
        userMessage: {
          backgroundColor: "#0096a2",
          textColor: "#ffffff",
        },
        botMessage: {
          backgroundColor: "#ffffff",
          textColor: "#0096a2",
        },
        textInput: {
          placeholder: "Ketik pertanyaan Anda...",
        },
      },
    },
  });
</script>
```

## Auth Token & Session

- Token disimpan di localStorage dengan key `mimin-token-{username}`
- Greeting state disimpan dengan key `cu-greeting-{username}`
- Token otomatis diverifikasi saat widget dimuat — jika invalid (401), token dihapus dan user diminta login ulang

## Dynamic Registration Fields

Form register mengambil field dari API `/v1/customer-field/get-by-username/{username}`. Field yang didukung:

| data_type | Input | Validasi |
|-----------|-------|----------|
| `string` | Text input | Min 1 karakter jika required |
| `number` | Number input | Harus angka |
| `boolean` | Select (Yes/No) | — |
| `date` | Date picker | Format yyyy-MM-dd |
| `password` | Password input | Min 6 karakter |

Field ditampilkan dalam dua tab:
- **Required** — field dengan `is_required: true`
- **Optional** — field dengan `is_required: false`

Password + Confirm Password selalu di bagian bawah sebelum Terms of Service.

## Error Handling

- Error login ditampilkan di UI dengan pesan dari backend (misal: `"Your account has not been activated"`)
- Network error dan system error ditampilkan sebagai fallback message
- Request yang sedang berjalan bisa dibatalkan via AbortController

## Styling dengan Prefix `mimin-`

Semua class Tailwind menggunakan prefix `mimin-` agar tidak bentrok dengan style website client. Contoh: `mimin-flex`, `mimin-text-sm`, `mimin-bg-white`, `mimin-rounded-md`.

## License

MIT License
