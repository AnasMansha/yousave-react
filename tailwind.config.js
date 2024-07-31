/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'blue-900': '#0e2289',
        'custom-bg': '#fff4ed',
      },
      backgroundImage: {
        'home-slider': "url('/public/assets/images/Mask-group.png')",
      },
      
      height: {
        '80vh': '100vh',
      },
      width:
      {
        '20%':'20%',
        '60%':'60%',
      }
    },
  },
  plugins: [],
};
