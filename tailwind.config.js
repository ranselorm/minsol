/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2c517c",
        secondary: "#D97706",
        blu: "#0057b8",
        grey: "#6B7280",
        accent: "#e7ebf3",
      },
    },
  },
  plugins: [],
};
