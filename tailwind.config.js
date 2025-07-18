/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./demo.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0096A2",
        secondary: "#FFA100",
        destructive: "#F26075",
      },
    },
  },
  plugins: [],
  prefix: "mimin-",
  // important: true
};
