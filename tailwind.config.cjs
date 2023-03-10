/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#091428",
        "light-blue": "#CDFAFA",
      },
      fontFamily: {
        'LoL': ['BeaufortforLOL'],
      },
    },
  },
  plugins: [],
}
