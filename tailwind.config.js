const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        headerFont: ['Playfair Display', ...defaultTheme.fontFamily.sans ],
        bodyFont: ['Lato', ...defaultTheme.fontFamily.sans ],
      },
      colors: {
        bodyColor: "#0d0d0d",
        bgLight: "#141414",
        darkText: "#242424",
        lightText: "#a5a5a5"

      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to bottom right, #ca8a04 0%,  #eab308 30%, #ca8a04 60%,  #a16207 100%)',
        'black-gradient': 'linear-gradient(to bottom right, #080808 0%, #0d0d0d 30%, #050505 60%, #030303 100%)',
      },
      backgroundColor: {
        'light-black-color': "rgb(11 11 11)",
      },
    
    },
    screens: {
      xlg: {
        max: "1400px",
      },
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "520px",
      },
      xsm: {
        max: "374px",
      },
    },
  },
  plugins: [],
}
