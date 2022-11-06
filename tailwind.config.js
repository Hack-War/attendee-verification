/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        'dash-height': 'calc(100vh - 6rem);',
    }
  },
},
  plugins: [],
}