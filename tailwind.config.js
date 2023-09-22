/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '360px' },
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: []
};