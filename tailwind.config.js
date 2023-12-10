const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        ...defaultTheme.screens,
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: []
};