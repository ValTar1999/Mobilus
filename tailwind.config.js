/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        gabarito: ["Gabarito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
