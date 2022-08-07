/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#fc913a",
        "darker-secondary": "#f57309",
      },
      fontFamily: {
        roboto: ['"Roboto Mono"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
