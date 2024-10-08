/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif']
      },
      screens: {
        xxs: '20rem',
        xs: '30rem'
      }
    }
  },
  plugins: [
    fluid,
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements'
    })
  ]
};
