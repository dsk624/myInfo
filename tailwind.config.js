/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f8',
          100: '#edeef0',
          200: '#dbe0e4',
          300: '#bdc5cc',
          400: '#9aa6b1',
          500: '#7e8b98',
          600: '#66717e',
          700: '#555e68',
          800: '#484e55',
          900: '#3e4247',
        },
        paper: '#fdfbf7',
      }
    },
  },
  plugins: [],
}