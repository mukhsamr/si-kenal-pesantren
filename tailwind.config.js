/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#1e293b'
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.2)' },
          '50%, 80%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}

