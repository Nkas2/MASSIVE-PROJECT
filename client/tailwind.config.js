/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Lexend Deca', 'sans-serif'],
        bodyFont: ['Noto Sans', 'serif', 'sans-serif'],
      },
      colors: {
        background: '#ebf1f6',
        primary: '#A21D21',
        secondary: '#F38596',
        customGray: '#969696',
        greyButton: '#404040',
        greyButtonHover: '#2D2D2D',
        primaryHover: '#7E161A',
        tableprimary: '#D9D9D9',
        tablesecondary: '#FEEFF2',
      },
    },
  },
  plugins: [],
};
