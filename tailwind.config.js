/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
      },
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF0000",
      gray: {
        100: "#E3E6ED",
        200: "#D2D6DA",
        300: "#9A9CA1",
        400: "#6F7175",
      },
      pink: {
        100: "#FFEEEE",
        200: "#EDC8C8",
        300: "#D29191",
        400: "#A15050",
      },
      blue: {
        100: "#E7F6FF",
        200: "#9DC1D7",
        300: "#377CBA",
        400: "#395365",
      },
      green: {
        100: "#83FFD3",
        200: "#55D6A7",
        300: "#2B6B54",
      },
    },
    aspectRatio: {
      "2/1": "2 / 1",
      "4/3": "4 / 3",
    },
    gridTemplateColumns: {
      dateList: "minmax(min-content, 25%) 1fr",
    },
  },
  plugins: [],
};
