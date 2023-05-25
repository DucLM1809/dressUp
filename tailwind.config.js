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
      },
      backgroundImage: {
        advertise1:
          "url('https://i.pinimg.com/564x/27/44/6c/27446c6cfc6135e8e7903206d9e30b93.jpg')",
        advertise2:
          "url('https://i.pinimg.com/564x/1d/a5/b5/1da5b5b549b86b1f12d14741a1877df0.jpg')"
      }
    }
  },
  plugins: []
}
