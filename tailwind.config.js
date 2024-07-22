/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'home-slider': "url('/public/assets/images/Mask-group.png')",
      },
      
      height: {
        '80vh': '100vh',
      },
    },
  },
  plugins: [],
};
