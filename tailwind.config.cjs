/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem'
      },
      fontFamily: {
        'sans': ['Lato', defaultTheme.fontFamily.sans],
        'mono': ['Arvo', defaultTheme.fontFamily.mono],
        'serif': ['Inconsolata', defaultTheme.fontFamily.serif]
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '96rem',
        '10xl': '100rem'
      }
    },
  },
  plugins: [require('daisyui')],
}