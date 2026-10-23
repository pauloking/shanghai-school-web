/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shanghai: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        warm: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          200: '#f6ebd0',
          500: '#e69d25',
          600: '#c77e14',
          700: '#9e5e0a',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
        }
      }
    },
  },
  plugins: [],
}
