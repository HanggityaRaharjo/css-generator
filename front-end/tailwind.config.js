/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0ea5e9",

          secondary: "#6c757d",

          accent: "#4a8ed6",

          neutral: "#2C2C35",

          "base-100": "#EDECF3",

          info: "#17a2b8",

          success: "#218838",

          warning: "#e0a800",

          error: "#dc3545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
