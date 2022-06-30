/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "blue-dark": "#1c1f2c",
      "blue-medium-dark": "#2a2d3a",
      black: "#12141a",
      cyan: "#3fa1c4",
      "green-cyan": "#00ad88",
      "green-cyan-dark": "#017e63",
      red: "#f53434",
      "blue-light": "#edf0ff",
      yellow: "#f5c434",
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
    extend: {},
  },
  plugins: [],
};
