/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeLight: {
          '0%': { backgroundColor: '#1e3a8a' },  // azul
          '50%': { backgroundColor: '#ffffff' }, // branco
          '100%': { backgroundColor: '#1e3a8a' } // volta ao azul
        }
      },
      animation: {
        fadeLight: 'fadeLight 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}