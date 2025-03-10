/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          dark: 'var(--primary-dark)'
        },
        text: {
          DEFAULT: 'var(--text-color)',
          secondary: 'var(--text-secondary)'
        },
        background: {
          DEFAULT: 'var(--bg-color)',
          secondary: 'var(--bg-secondary)'
        }
      }
    }
  },
  plugins: {'@tailwindcss/postcss': {},
},
};