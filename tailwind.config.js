/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      DesktopHD: { max: '1640px' },
      Desktop: { max: '1200px' },
      Tablet: { max: '768px' },
      Mobile: { max: '410px' },
    },
    extend: {},
  },
  plugins: [],
};
