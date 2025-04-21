/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #f87171, #a78bfa, #34d399)', // Adjusted gradient colors
      },
    },
  },
  plugins: [],
}