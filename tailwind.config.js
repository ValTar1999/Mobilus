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
        'dm-sans': ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
