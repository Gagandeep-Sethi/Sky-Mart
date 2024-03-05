/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'shadows-into-light': ['Shadows Into Light', 'cursive']
      }
    },
  },
  plugins: [],
}

