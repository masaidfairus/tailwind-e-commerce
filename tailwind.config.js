module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FD3D57",
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
