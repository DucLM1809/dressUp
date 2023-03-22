/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#060606',
        background: '#E0E0E0',
        disabled: '#D9D9D9',
        orange: '#FF993A'
      }
    }
  },
  plugins: []
}
