/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        display: ['Karla', 'sans-serif']
      }
    }
  },
  plugins: []
}
