/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'shadows-into-light':['Shadows Into Light', 'cursive'],
        'exo': ['Exo', 'sans-serif'],
      },
      colors:{
        customPurple:'#9880F9',
        customBlack:"#171822"
      }
    },
  },
  variants: {},

  plugins: [],
}

