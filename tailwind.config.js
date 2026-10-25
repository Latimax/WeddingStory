/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9F2',
          warm: '#FDF5EC',
          paper: '#FAF0E4',
          card: '#F6EADA'
        },
        plum: {
          DEFAULT: '#43233C',
          dark: '#2B1426',
          light: '#5E3354',
          muted: '#764B6C'
        },
        coral: {
          DEFAULT: '#F47C78',
          light: '#F89C99',
          dark: '#D95C58'
        },
        marigold: {
          DEFAULT: '#F4BA58',
          light: '#F8CD81',
          dark: '#D99E3A'
        },
        sage: {
          DEFAULT: '#A1B99B',
          light: '#BDD2B8',
          dark: '#829E7C'
        },
        lilac: {
          DEFAULT: '#C9B6D8',
          light: '#DFD2EA',
          dark: '#A690B8'
        }
      },
      fontFamily: {
        headline: ['Fraunces', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        handwriting: ['Caveat', 'cursive']
      },
      boxShadow: {
        'soft-editorial': '0 10px 30px -10px rgba(67, 35, 60, 0.08), 0 20px 25px -5px rgba(67, 35, 60, 0.04)',
        'paper': '0 4px 20px -2px rgba(67, 35, 60, 0.06), 0 2px 6px -1px rgba(67, 35, 60, 0.04)',
        'elevated': '0 20px 40px -15px rgba(67, 35, 60, 0.12)'
      }
    },
  },
  plugins: [],
}
