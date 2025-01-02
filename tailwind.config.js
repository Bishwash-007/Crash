/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif","roboto"],
      },
      colors: {
        primary: "#F9C23C",
        secondary: "#E6B047",
        tertiary: "#C79B3A",
        quaternary: "#B37D32",
        quinary: "#9B652E",
        black: "#212121",
        white: "#FFFFFF",
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      }
    },
  },
  plugins: [],
};
