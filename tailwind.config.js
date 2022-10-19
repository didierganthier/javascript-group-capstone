const tailwindcssFilters = require('tailwindcss-filters');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  plugins: [
    tailwindcssFilters,
  ],
};
