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
        'service_one':"url('/src/assets/service_bg_1.png')",
        'service_two':"url('/src/assets/service_bg_2.png')",
        'service_three':"url('/src/assets/service_bg_3.png')",
        'learn_more':"url('/src/assets/learn_more_img.png')",
        'blog_one':"url('/src/assets/blog1.png')",
        'blog_two':"url('/src/assets/blog2.png')",
        'blog_three':"url('/src/assets/blog3.png')",
      }
    },
  },
  plugins: [],
}

