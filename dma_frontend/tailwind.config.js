/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fam1: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  // important: '#root',
  prefix: 'tw-',
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
};
