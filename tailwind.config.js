module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Kanit': ['sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
