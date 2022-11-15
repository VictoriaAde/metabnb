/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#434343',
        grayTwo: '#A3A3A3',
        grayThree: '#B8B8B8',
        purple: '#a02279',
        black_bg: '#1D1D1E',
        milk: '#F1F3F9',
        lightGray: '#B4B4B4',
        lightMilk: '#F8F9FA',
        line: '#CFD8DC',
        darkGray: '#333333',
        transparent: 'rgba(64, 64, 64, 0.3)',
      },
      screens: {
        xxl: { max: '2440px' },

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1025px' },
        // => @media (max-width: 1023px) { ... }
        md: { max: '800px' },

        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
