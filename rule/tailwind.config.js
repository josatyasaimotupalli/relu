/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mongolian: ["Mongolian Baiti", "sans-serif" ,"Barlow"], // Add custom font
        barlow: ["Barlow", "sans-serif"], // Add Barlow font
        gilroy: ["Gilroy", "sans-serif"], // Add Gilroy as a custom font
      },
    },
  },
  plugins: [],
};



