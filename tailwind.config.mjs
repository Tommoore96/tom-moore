/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F5F5F5',
      blue: '#BCE7FD',
      jasmine: '##FFD275',
      charcoal: '#373F51',
      'bright-pink': '#F56476',
      green: '#6EAF7E'
    },
    extend: {
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        display: ['Karla', 'sans-serif']
      }
    }
  },
  plugins: []
}
