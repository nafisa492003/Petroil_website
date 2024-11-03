/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1118px",
      },
      fontFamily: {
      "Poppins": ["Poppins", "serif"],
      },
      colors: {
        'red': '#F40404',
        'border_Yellow': '#FFB800',
        'text_white': '#FFFFFF',
        'semi_white': '#b0b1b2',
        'text_black': '#000000',
      },
      backgroundImage: {
        'banner': "url('/src/assets/Banner.png')",
      }
    },
  },
  plugins: [],
}

