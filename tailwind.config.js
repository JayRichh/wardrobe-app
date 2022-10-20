/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        tomato: "#ff6347",
        marigold: "#f9c80e",
      },
    },
  },
  plugins: [],
};
