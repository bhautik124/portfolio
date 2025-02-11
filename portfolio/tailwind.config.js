/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Amarante", "serif"],
        homepage: ["Candal", "serif"],
        aboutText: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
