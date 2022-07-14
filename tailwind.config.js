/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "1024px",
      lg: "1200px",
      xl: "1800px",
    },
    extend: {},
  },
  plugins: [],
};
