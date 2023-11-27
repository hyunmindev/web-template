/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['var(--font-fira-mono)'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
    logs: false,
    prefix: 'ui-',
  },
};
