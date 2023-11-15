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
      },
    },
  },
  plugins: [],
};
