module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'max': '376px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
