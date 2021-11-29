module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5B0E7F',
        secondary: '#F707CF',
        tertiary: '#65FFF5',
        quaternary: '#361359',
        white: '#ffffff',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
