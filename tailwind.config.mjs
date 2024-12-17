/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F5F5F5',
      blue: '#BCE7FD',
      jasmine: '#FFD275',
      charcoal: '#36454f',
      'bright-pink': '#F56476',
      green: '#6EAF7E'
    },
    extend: {
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        display: ['Karla', 'sans-serif']
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out'
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') }
        }
      })
    }
  },
  plugins: []
}
